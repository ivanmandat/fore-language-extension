# ITabSheetEventArgs.TabSheet

ITabSheetEventArgs.TabSheet
-


# ITabSheetEventArgs.TabSheet


## Синтаксис


TabSheet: [ITabSheetBox](../ITabSheetBox/ITabSheetBox.htm);


## Описание


Свойство TabSheet возвращает
 компонент, для которого сгенерировано событие.


## Пример


	Sub TabSheetBox1OnTableClick(Sender: Object; Args: ITabSheetEventArgs);

	Var

	    s: String;

	Begin

	    s := Args.TabSheet.Name;

	End Sub TabSheetBox1OnTableClick;


После выполнения события в переменной «s» будет содержаться наименование
 листа, на котором был нажат верхний левый квадрат, выделяющий всю таблицу.


См. также:


[ITabSheetEventArgs](ITabSheetEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
