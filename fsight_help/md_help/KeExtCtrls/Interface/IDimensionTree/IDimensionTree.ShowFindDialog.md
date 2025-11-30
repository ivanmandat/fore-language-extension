# IDimensionTree.ShowFindDialog

IDimensionTree.ShowFindDialog
-


# IDimensionTree.ShowFindDialog


## Синтаксис


ShowFindDialog;


## Описание


Метод ShowFindDialog инициализирует
 диалог поиска элементов компонента [DimensionTree](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/DimensionTree.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента DimensionTree с наименованием
 «DimensionTree1» и компонента UiDimension, являющегося источником данных
 для «DimensionTree1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    DimensionTree1.ShowFindDialog;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку для компонента "DimensionTree1"
 будет инициализирован диалог поиска элементов.


См. также:


[IDimensionTree](IDimensionTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
