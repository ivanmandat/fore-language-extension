# TranslateDialog.getAllLanguages

TranslateDialog.getAllLanguages
-


# TranslateDialog.getAllLanguages


## Синтаксис


getAllLanguages();


## Описание


Метод getAllLanguages возвращает
 массив [кодов
 всех языков](http://msdn.microsoft.com/en-us/goglobal/bb964664.aspx), доступных в диалоге, в том числе [дополнительных](TranslateDialog.AdditionalLanguages.htm).


## Пример


Для выполнения примера предполагается наличие на *.html-странице компонента
 [TranslateDialog](../../../../Components/Metabase/Dialogs/TranslateDialog/TranslateDialog.htm)
 (см. «[Пример
 создания компонента TranslateDialog](../../../../Components/Metabase/Dialogs/TranslateDialog/TranslateDialog_example.htm)») с наименованием «translateDialog».
 Отобразим в диалоге все доступные языки (в том числе [дополнительные](TranslateDialog.AdditionalLanguages.htm))
 и скроем кнопку «[Еще
 язык](TranslateDialog.ShowLanguagesButton.htm)»:


allLang = translateDialog.getAllLanguages();
translateDialog.beginUpdate();
translateDialog.setDisplayLanguages(allLang);
translateDialog.setShowLanguagesButton(false);
translateDialog.endUpdate();
После выполнения в диалоге будут отображены все доступные языки, а кнопка
 «Еще язык» будет скрыта.


См. также:


[TranslateDialog](TranslateDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
