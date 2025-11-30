# IRegex.IsMatch

IRegex.IsMatch
-


# IRegex.IsMatch


## Синтаксис


IsMatch(Text: String; [Pattern: String = "";]
 [StartPosition: Integer = 0]): Boolean;


## Параметры


Text. Входной текст, к которому
 применяется регулярное выражение;


Pattern. Шаблон регулярного
 выражения для проверки;


StartPosition. Позиция в тексте,
 с которой начинается проверка.


## Описание


Метод IsMatch проверяет, соответствует
 ли текст заданному шаблону регулярного выражения.


## Комментарии


Регулярное выражение задаётся в формате строки, которая соответствует
 стандарту задания регулярного выражения, определенного в языке ECMAScript.
 Более подробно можно ознакомиться на различных ресурсах, посвящённых этому
 языку, например: [en.cppreference.com](https://en.cppreference.com/w/cpp/regex/ecmascript), [cplusplus.com](https://cplusplus.com/reference/regex/ECMAScript/).


Метод возвращает значение True,
 если текст соответствует указанному шаблону и False,
 если не соответствует.


## Пример


	Sub UserProc;

	Var

	    TelNumber: Array[5] Of String = [

	        "8-901-23-45678" ,

	        "+79012345678" ,

	        "+7(901)23-45678" ,

	        "7(901)2345678" ,

	        "8(902)34-56789" ];

	    Pattern: String = "(\+7|7|8)\(\d{3}\)\d{2}-\d{5}";

	    s: String;

	Begin

	    Debug.WriteLine("Соответствие телефона шаблону X(XXX)XX-XXXXX:");

	    For Each s In TelNumber Do

	        Debug.WriteLine(s + ": " + Regex.IsMatch(s, Pattern).ToString);

	    End For;

	End Sub UserProc;


При выполнении примера с помощью регулярного выражения осуществляется
 проверка соответствия номеров телефонов заданному шаблону. Номера телефонов
 и результаты проверки будут выведены в консоль среды разработки.


См. также:


[IRegex](IRegex.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
