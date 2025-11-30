# IReportBox.ControlPanelAllowed

IReportBox.ControlPanelAllowed
-


# IReportBox.ControlPanelAllowed


## Синтаксис


ControlPanelAllowed: Boolean;


## Описание


Свойство ControlPanelAllowed
 определяет, будет ли отображаться панель элементов управления.


## Комментарии


Свойство актуально, если в отображаемом регламентном отчете настроены
 и отображаются какие-либо элементы управления.


Допустимые значения:


	- True. Панель элементов
	 управления отображается;


	- False. Значение по умолчанию.
	 Панель элементов управления не отображается.


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента CheckBox с наименованием «CheckBox1», компонент ReportBox
 с наименованием «ReportBox1» и компонент UiReport, являющегося источником
 данных для «ReportBox1». В регламентном отчете, который подключен к UiReport,
 созданы элементы управления.


Пример является обработчиком события OnChange для компонента «CheckBox1».


			Sub CheckBox1OnChange(Sender: Object; Args: IEventArgs);

Begin

    ReportBox1.ControlPanelAllowed := CheckBox1.Checked;

End Sub CheckBox1OnChange;


При изменении состояния флажка будет скрыта/отображена панель элементов
 управления.


См. также:


[IReportBox](IReportBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
