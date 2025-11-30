# TranslateDialog.DefaultLanguage

TranslateDialog.DefaultLanguage
-


# TranslateDialog.DefaultLanguage


## Синтаксис


DefaultLanguage: Number


## Описание


Свойство DefaultLanguage определяет
 язык по умолчанию.


## Комментарии


Значение свойства - [четырехзначный
 цифровой код языка](http://msdn.microsoft.com/en-us/goglobal/bb964664.aspx).


Перевод, указанный для «языка по умолчанию», будет использоваться в
 случаях, когда для другой локализации не установлено значение перевода.


## Пример


Для выполнения примера предполагается наличие на *.html-странице компонента
 [TranslateDialog](../../../../Components/Metabase/Dialogs/TranslateDialog/TranslateDialog.htm)
 (см. «[Пример
 создания компонента TranslateDialog](../../../../Components/Metabase/Dialogs/TranslateDialog/TranslateDialog_example.htm)») с наименованием «translateDialog».
 Установим украинский язык в качестве языка по умолчанию в диалоге «Переводы»:


translateDialog.setDefaultLanguage(1058);
После выполнения примера в качестве языка по умолчанию в диалоге «Переводы»
 будет установлен украинский, для всех языков с не заданными переводами
 будет установлен перевод, заданный для языка по умолчанию.


См. также:


[TranslateDialog](TranslateDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
