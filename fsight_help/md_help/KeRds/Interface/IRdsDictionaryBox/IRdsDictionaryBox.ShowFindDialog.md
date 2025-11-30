# IRdsDictionaryBox.ShowFindDialog

IRdsDictionaryBox.ShowFindDialog
-


# IRdsDictionaryBox.ShowFindDialog


## Синтаксис


ShowFindDialog;


## Описание


Метод ShowFindDialog вызывает
 стандартный диалог поиска элементов справочника НСИ.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1»,
 компонента RdsDictionaryBox с
 наименованием «RdsDictionaryBox1»
 и компонента UiRdsDictionary,
 являющегося источником данных для «RdsDictionaryBox1».
 Пример является обработчиком события OnClick
 для кнопки.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    RdsDictionaryBox1.ShowFindDialog;

	End Sub Button1OnClick;


После выполнения примера будет открыт стандартный диалог поиска элементов
 справочника НСИ.


См. также:


[IRdsDictionaryBox](IRdsDictionaryBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
