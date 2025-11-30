# IControl.HintTimeout

IControl.HintTimeout
-


# IControl.HintTimeout


## Синтаксис


HintTimeout: Integer;


## Описание


Свойство HintTimeout определяет
 время отображения всплывающей подсказки.


## Комментарии


Значение свойства задается в миллисекундах. Свойство влияет на следующие
 всплывающие подсказки:


	- Подсказки для компонентов;


	- Подсказки для элементов таких компонентов, как: [ListView](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/ListView.htm),
	 [TreeList](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/TreeList.htm),
	 [DimensionTree](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/DimensionTree.htm)
	 и аналогичных компонентов;


	- Подсказки для элементов управления компонентов [Ribbon](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/Ribbon.htm)
	 и [ToolBar](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/ToolBar.htm);


	- Подсказки для ячеек таблиц компонентов [ReportBox](KeReport.chm::/Class/ReportBox/ReportBox.htm)
	 и [TabSheetBox](Tabsheet.chm::/Class/TabsheetBox/TabsheetBox.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента TreeList
 с наименованием «TreeList1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    TreeList1.HintTimeout := 700;

    TreeList1.ShowHints := True;

End Sub Button1OnClick;


При нажатии на кнопку для компонента «TreeList1» будет включено отображение
 всплывающих подсказок для элементов. Время отображения подсказки - 700
 мс.


См. также:


[IControl](IControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
