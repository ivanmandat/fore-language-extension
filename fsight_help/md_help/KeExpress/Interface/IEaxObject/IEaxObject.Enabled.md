# IEaxObject.Enabled

IEaxObject.Enabled
-


# IEaxObject.Enabled


## Синтаксис


Enabled: Boolean;


## Описание


Свойство Enabled определяет,
 производится ли построение объекта. True
 - объект отстраивается, False
 - объект не отстраивается.


Примечание.
 Данное свойство предназначено для отключения построения диаграммы или
 карты отчета. Это позволяет уменьшить объем используемой памяти.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiErAnalyzer с наименованием
 «UiErAnalyzer1», являющегося источником данных для компонентов TabSheetBox
 и ChartBox. В «UiErAnalyzer1» должен быть загружен экспресс-отчет.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    erAn: IEaxAnalyzer;

	    eaxObj: IEaxChart;

	Begin

	    erAn := UiErAnalyzer1.ErAnalyzer;

	    eaxObj := erAn.Chart;

	    eaxObj.Enabled := False;

	End Sub Button1OnClick;


После выполнения примера построение диаграммы будет отключено.


См. также:


[IEaxObject](IEaxObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
