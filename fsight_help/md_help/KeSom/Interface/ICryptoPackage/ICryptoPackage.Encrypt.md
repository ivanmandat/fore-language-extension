# ICryptoPackage.Encrypt

ICryptoPackage.Encrypt
-


# ICryptoPackage.Encrypt


## Синтаксис


Encrypt(passPhrase: String; clearText: String):
 String;


## Параметры


passPhrase. Секретная фраза,
 используемая при шифровании текста;


clearText. Текст, который необходимо
 зашифровать.


## Описание


Метод Encrypt осуществляет шифрование
 указанного текста и возвращает полученный результат.


## Пример


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc(Pass: String; Text: String);

	Var

	    Crypt: ICryptoPackage;

	    Res: String;

	Begin

	    Crypt := New CryptoPackage.Create;

	    Res := Crypt.Encrypt(Pass, Text);

	    Debug.WriteLine("Результат шифрования: " + Res);

	    Res := Crypt.Decrypt(Pass, Res);

	    Debug.WriteLine("Результат дешифрования: " + Res);

	End Sub UserProc;


Указанная процедура осуществляет шифрование, а затем дешифрование текста.
 Исходные текст и секретная фраза передаются в качестве входных параметров.
 Результаты шифрования и дешифрования выводятся в консоль среды разработки.


См. также:


[ICryptoPackage](ICryptoPackage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
