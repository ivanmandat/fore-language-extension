# ILanerBox.ExecuteMethodEx

ILanerBox.ExecuteMethodEx
-


# ILanerBox.ExecuteMethodEx


## Синтаксис


ExecuteMethodEx(Method: [LanerBoxMethod](../../Enums/LanerBoxMethod.htm);
 Settings: [ILanerBoxMethodSettings](../ILanerBoxMethodSettings/ILanerBoxMethodSettings.htm)):
 Variant;


## Параметры


Method. Метод преобразования
 ряда;


Settings. Параметры применения
 метода преобразования.


## Описание


Метод ExecuteMethodEx выполняет
 преобразование выделенного ряда данных указанным методом с заданными параметрами.


## Комментарии


Признак того, что указанный метод можно применить к выделенному ряду
 возвращает [ILanerBox.CanExecuteMethod](ILanerBox.CanExecuteMethod.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента LanerBox с наименованием
 «LanerBox1» и компонента UiErAnalyzer, являющегося источником данных для
 LanerBox. В UiErAnalyzer должна быть загружена рабочая книга базы данных
 временных рядов.


Добавьте ссылку на системную сборку Ms.


Описанная процедура должна быть назначена обработчиком события OnClick
 для кнопки. Пример выполняется при нажатии кнопки.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Sett: ILanerBoxMethodSettings;

	    Param: Array[4] Of Variant;

	Begin

	    If LanerBox1.CanExecuteMethod(LanerBoxMethod.TermInfoMethod) Then

	        Sett := New LanerBoxMethodSettings.Create;

	        Sett.TrySelfExecute := True;

	        Sett.CreateDerivedSeries := False;

	        Param[0] := MsInversion.Diff;

	        Param[1] := MsInversionLag.PrecidingYear;

	        Param[2] := -3;

	        Sett.Param := Param;

	        LanerBox1.ExecuteMethodEx(LanerBoxMethod.TermInfoMethod, Sett);

	    End If;

	End Sub Button1OnClick;


После выполнения примера выделенные ряды рабочей книги будут преобразованы
 в вычислимые, рассчитанные как прирост значений ряда к предыдущему году
 с лагом «3».


См. также:


[ILanerBox](ILanerBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
