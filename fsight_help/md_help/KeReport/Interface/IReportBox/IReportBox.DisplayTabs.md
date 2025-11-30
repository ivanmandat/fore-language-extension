# IReportBox.DisplayTabs

IReportBox.DisplayTabs
-


# IReportBox.DisplayTabs


## Синтаксис


DisplayTabs: Boolean;


## Описание


Свойство DisplayTabs определяет
 будут ли отображаться ярлыки листов.


## Пример


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    ReportBox1.DisplayTabs := False;

End Sub Button1OnClick


После выполнения примера при нажатии на кнопку будет отключено отображение
 ярлыков листов для компонента с наименованием «ReportBox1».


См. также:


[IReportBox](IReportBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
