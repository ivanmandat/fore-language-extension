# ILanerBoxMethodSettings.Param

ILanerBoxMethodSettings.Param
-


# ILanerBoxMethodSettings.Param


## Синтаксис


Param: Variant;


## Описание


Свойство Param определяет параметры
 преобразования ряда.


## Комментарии


Используется, если в методе [ILanerBox.ExecuteMethodEx](../ILanerBox/ILanerBox.ExecuteMethodEx.htm)
 для параметра Method установлено
 значение [LanerBoxMethod.TermInfoMethod](../../Enums/LanerBoxMethod.htm).
 Параметры метода передаются в виде массива, максимальный размер которого
 четыре элемента:


	- Param[0]: [MsInversion](KeMs.chm::/Enums/MsInversion.htm).
	 Определяет способ начального преобразования, применяемый к ряду;


	- Param[1]: [MsInversionLag](KeMs.chm::/Enums/MsInversionLag.htm).
	 Определяет период, на котором будет осуществляться начальное преобразование
	 ряда;


	- Param[2]: Integer. Определяет лаг
	 для периода, на котором осуществляется начальное преобразование ряда.
	 Данный элемент учитывается, если задано значение элемента Param[1];


	- Param[3]. Возможны взаимоисключающие
	 друг друга варианты:


		- Param[3]: String. Передается лаг;


		- Param[3]: DateTime. Передается дата;


		- Param[3]: Boolean. Признак того, что передается ряд данных.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента LanerBox с наименованием
 «LanerBox1» и компонента UiErAnalyzer, являющегося источником данных для
 LanerBox. В «UiErAnalyzer1» должна быть загружена рабочая книга базы данных
 временных рядов.


Пример будет выполняться при нажатии на кнопку.


	Sub Button1OnClick(Sender:Object; Args: IMouseEventArgs);

	Var

	    Sett: ILanerBoxMethodSettings;

	    Param: Array[4] Of Variant;

	Begin

	    Sett := New LanerBoxMethodSettings.Create;

	    Sett.TrySelfExecute := True;

	    Sett.CreateDerivedSeries := False;

	    Param[0] := MsInversion.Diff;

	    Param[1] := MsInversionLag.PrecidingYear;

	    Param[2] := -3;

	    Sett.Param := Param;

	    LanerBox1.ExecuteMethodEx(LanerBoxMethod.TermInfoMethod, Sett);

	End Sub Button1OnClick;


После выполнения примера выделенные ряды рабочей книги будут преобразованы
 в вычислимые, рассчитанные как прирост значений ряда к предыдущему году
 с лагом «3».


См. также:


[ILanerBoxMethodSettings](ILanerBoxMethodSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
