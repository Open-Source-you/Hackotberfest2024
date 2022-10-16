package com.example.birthdaygreeting

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.TextView
import org.w3c.dom.Text

class BirthdayGreetingActivity : AppCompatActivity() {
    lateinit var birthdayGreeting2:TextView
    companion object{
        const val NAME_EXTRA = "name_extra"
    }
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_birthday_greeting)
        val name = intent.getStringExtra(NAME_EXTRA)
        birthdayGreeting2=findViewById(R.id.birthdayGreeting)
        birthdayGreeting2.text = "Happy Birthday\n$name!"
    }
}