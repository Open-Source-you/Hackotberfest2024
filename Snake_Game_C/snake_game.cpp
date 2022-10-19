#include <stdio.h>
#include <stdlib.h>
#include <windows.h>
#include <conio.h>
#include <ctime>
#include <iostream>
using namespace std;
void draw(char main[][75], int score);
void reset(char main[][75]);
void move(char main[][75], int &parts, int pastCounter, int past[][2], int &apples, int &score, int &quit);
void check(int &direction);
void directionn(int direction, int &pastCounter, int past[][2]);
void apple(int &apples, char main[][75]);
void quitGame(int score);
int main()

{
    int past[1000][2];
    int parts = 3;
    char main[23][75];
    int pastCounter = 6;
    int direction = 0;
    int apples = 0;
    int score = 0;
    int quit = 0;
    int playAgain = 1;

    srand(0);

    for (int x = 0; x < 1000; x++)
    {
        for (int y = 0; y < 2; y++)
        {
            past[x][y] = 0;
        }
    }
    past[pastCounter][0] = 1;
    past[pastCounter][1] = 1;
    while (quit == 0)
    {
        draw(main, score);
        check(direction);
        directionn(direction, pastCounter, past);
        reset(main);
        move(main, parts, pastCounter, past, apples, score, quit);
        if (apples == 0)
        {
            apple(apples, main);
        }
    }
    quitGame(score);
    return 1;
}
void draw(char main[][75], int score)
{
    system("cls");
    cout << "Score : " << score;
    cout << endl;
    for (int x = 0; x < 23; x++)
    {
        for (int y = 0; y < 75; y++)
        {
            cout << main[x][y];
        }
        cout << "\n";
    }
}
void reset(char main[][75])
{
    for (int x = 0; x < 23; x++)
    {
        for (int y = 0; y < 75; y++)
        {
            if (main[x][y] == '@')
            {
                main[x][y] == '@';
            }
            else
            {
                if (x == 0 || x == 22 || y == 0 || y == 74)
                {
                    main[x][y] = 177;
                }
                else
                {
                    main[x][y] = ' ';
                }
            }
        }
    }
}

void move(char main[][75], int &parts, int pastCounter, int past[][2], int &apples, int &score, int &quit)
{
    if (past[pastCounter][0] == 22 || past[pastCounter][0] == 0)
    {
        quit = 1;
    }
    if (past[pastCounter][1] == 74 || past[pastCounter][1] == 0)
    {
        quit = 1;
    }
    for (int x = 0; x < parts; x++)
    {
        if (main[past[pastCounter - x][0]][past[pastCounter - x][1]] == '@')
        {
            apples--;
            parts++;
            score += 10;
        }
        if (main[past[pastCounter - x][0]][past[pastCounter - x][1]] == 'o')
        {
            quit = 1;
        }
        else
        {
            main[past[pastCounter - x][0]][past[pastCounter - x][1]] = 'o';
        }
    }
}
void check(int &direction)
{
    int key = 0;
    if (kbhit())
    {
        key = -getch();
        switch (key)
        {
        case -72:
            direction = 2;
            break;
        case -77:
            direction = 0;
            break;
        case -80:
            direction = 3;
            break;
        case -75:
            direction = 1;
            break;
        }
    }
}
void directionn(int direction, int &pastCounter, int past[][2])
{
    int down, right;
    right = past[pastCounter][1];
    down = past[pastCounter][0];
    switch (direction)
    {
    case 0:
        right++;
        break;
    case 1:
        right--;
        break;
    case 2:
        down--;
        break;
    case 3:
        down++;
    }

    pastCounter++;
    past[pastCounter][0] = down;
    past[pastCounter][1] = right;
}
void apple(int &apples, char main[][75])
{
    int up = 0;
    int left = 0;
    apples = 4;

    for (int x = 0; x < apples; x++)
    {
        up = rand() % 25;
        left = rand() % 74;

        if (main[up][left] == 'o')
        {
            apple(apples, main);
        }
        if (main[up][left] == '*')
        {
            apple(apples, main);
        }
        else
        {
            main[up][left] = '@';
        }
    }
}
void quitGame(int score)
{
    int quit = 0;
    system("cls");
    cout << "GAME OVER!!!!\n\n";
    cout << "You got a score of :" << score;
}
