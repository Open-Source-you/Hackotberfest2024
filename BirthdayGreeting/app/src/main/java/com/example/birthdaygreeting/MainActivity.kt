package com.example.birthdaygreeting

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.EditText
import android.widget.Toast

class MainActivity : AppCompatActivity() {
    lateinit var nameInput2: EditText
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

//        createBirthdayButton.setOnClickListener{
//        }
    }
    fun createBirthdayCard(view: View) {
        nameInput2=findViewById(R.id.nameInput)
        val name = nameInput2.editableText.toString()
        val intent = Intent(this, BirthdayGreetingActivity::class.java)
        intent.putExtra(BirthdayGreetingActivity.NAME_EXTRA, name)
        startActivity(intent)
    }

//    These are some inherited methods:
//    override fun onStart() {
//        super.onStart()
//    }
//
//    override fun onPause() {
//        super.onPause()
//    }
//
//    override fun onResume() {
//        super.onResume()
//    }
//
//    override fun onRestart() {
//        super.onRestart()
//    }
//
//    override fun onDestroy() {
//        super.onDestroy()
//    }
}