package airline;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import java.sql.*;

public class AddCustomer extends JFrame {

    private JTextField textField, textField_1, textField_2, textField_3, textField_4, textField_5, textField_6;
    private JRadioButton maleRadioButton, femaleRadioButton;

    public AddCustomer() {
        getContentPane().setBackground(Color.WHITE);
        setTitle("ADD CUSTOMER DETAILS");
        setDefaultCloseOperation(JFrame.HIDE_ON_CLOSE);
        setSize(900, 600);
        setLocationRelativeTo(null); // Center the frame on the screen
        getContentPane().setLayout(null);

        // Labels and TextFields
        JLabel passportNoLabel = new JLabel("PASSPORT NO");
        setupLabel(passportNoLabel, 60, 80);
        textField = createTextField(200, 80);

        JLabel pnrNoLabel = new JLabel("PNR NO");
        setupLabel(pnrNoLabel, 60, 120);
        textField_1 = createTextField(200, 120);

        JLabel addressLabel = new JLabel("ADDRESS");
        setupLabel(addressLabel, 60, 170);
        textField_2 = createTextField(200, 170);

        JLabel nationalityLabel = new JLabel("NATIONALITY");
        setupLabel(nationalityLabel, 60, 220);
        textField_3 = createTextField(200, 220);

        JLabel nameLabel = new JLabel("NAME");
        setupLabel(nameLabel, 60, 270);
        textField_4 = createTextField(200, 270);

        JLabel genderLabel = new JLabel("GENDER");
        setupLabel(genderLabel, 60, 320);
        maleRadioButton = createRadioButton("MALE", 200, 320);
        femaleRadioButton = createRadioButton("FEMALE", 280, 320);

        JLabel phNoLabel = new JLabel("PH NO");
        setupLabel(phNoLabel, 60, 370);
        textField_5 = createTextField(200, 370);

        JLabel flightCodeLabel = new JLabel("FLIGHT CODE");
        setupLabel(flightCodeLabel, 60, 30);
        textField_6 = createTextField(200, 30);

        // Button
        JButton saveButton = new JButton("SAVE");
        saveButton.setBounds(200, 420, 150, 30);
        saveButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent ae) {
                saveCustomer();
            }
        });
        add(saveButton);

        // Title
        JLabel addCustomerTitle = new JLabel("ADD CUSTOMER DETAILS");
        addCustomerTitle.setForeground(Color.BLUE);
        addCustomerTitle.setFont(new Font("Tahoma", Font.PLAIN, 31));
        addCustomerTitle.setBounds(420, 24, 442, 35);
        add(addCustomerTitle);

        // Image
        ImageIcon imageIcon = new ImageIcon(ClassLoader.getSystemResource("icon/emp.png"));
        JLabel imageLabel = new JLabel(imageIcon);
        imageLabel.setBounds(450, 80, 280, 410);
        add(imageLabel);

        setVisible(true);
    }

    private void setupLabel(JLabel label, int x, int y) {
        label.setFont(new Font("Tahoma", Font.PLAIN, 17));
        label.setBounds(x, y, 150, 27);
        add(label);
    }

    private JTextField createTextField(int x, int y) {
        JTextField textField = new JTextField();
        textField.setBounds(x, y, 150, 27);
        add(textField);
        return textField;
    }

    private JRadioButton createRadioButton(String text, int x, int y) {
        JRadioButton radioButton = new JRadioButton(text);
        radioButton.setBackground(Color.WHITE);
        radioButton.setBounds(x, y, 70, 27);
        add(radioButton);
        return radioButton;
    }

    private void saveCustomer() {
        String passportNo = textField.getText();
        String pnrNo = textField_1.getText();
        String address = textField_2.getText();
        String nationality = textField_3.getText();
        String name = textField_4.getText();
        String flightCode = textField_6.getText();
        String gender = maleRadioButton.isSelected() ? "male" : "female";
        String phNo = textField_5.getText();

        try {
            // Assuming 'conn' is a class handling database connection
            conn c = new conn();
            String query = "INSERT INTO passenger VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
            PreparedStatement pstmt = c.prepareStatement(query);
            pstmt.setString(1, pnrNo);
            pstmt.setString(2, address);
            pstmt.setString(3, nationality);
            pstmt.setString(4, name);
            pstmt.setString(5, gender);
            pstmt.setString(6, phNo);
            pstmt.setString(7, passportNo);
            pstmt.setString(8, flightCode);

            pstmt.executeUpdate();
            JOptionPane.showMessageDialog(null, "Customer Added");
            setVisible(false);

        } catch (SQLException e) {
            e.printStackTrace();
            JOptionPane.showMessageDialog(null, "Error: Failed to add customer");
        }
    }

    public static void main(String[] args) {
        EventQueue.invokeLater(() -> {
            new AddCustomer();
        });
    }
}
