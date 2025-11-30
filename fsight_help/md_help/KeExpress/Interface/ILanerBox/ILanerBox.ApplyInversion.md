# ILanerBox.ApplyInversion

ILanerBox.ApplyInversion
-


# ILanerBox.ApplyInversion


## Синтаксис


ApplyInversion(Inversion: Integer; InversionLag:
 Integer);


## Параметры


Inversion. Способ преобразования
 ряда;


InversionLag. Лаг, с которым
 будет выполняться преобразование.


## Описание


Метод ApplyInversion применяет
 указанное преобразование к выделенному вычисляемому ряду.


## Комментарии


Для выполнения ApplyInversion
 вычисляемый ряд должен быт зафиксирован.


Параметр Inversion определяется
 элементами перечисления [TsInversion](KeTransform.chm::/Enums/TsInversion.htm).


Значение параметра InversionLag
 должно быть неотрицательным.


Признак того, что указанное преобразование можно применить к ряду возвращает
 метод [ILanerBox.CanApplyInversion](ILanerBox.CanApplyInversion.htm).


Признак того, что указанное преобразование уже применено к ряду возвращает
 метод [ILanerBox.IsInversionTurnedOn](ILanerBox.IsInversionTurnedOn.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента LanerBox с наименованием
 «LanerBox1» и компонента UiErAnalyzer, являющегося источником данных для
 LanerBox. В UiErAnalyzer должна быть загружена рабочая книга базы данных
 временных рядов.


Описанная процедура должна быть назначена обработчиком события OnClick
 для кнопки. Пример выполняется при нажатии кнопки.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    CanInv: Boolean;

	    IsOn: Boolean;

	Begin

	    CanInv := LanerBox1.CanApplyInversion(TsInversion.DLog, 1);

	    IsOn := LanerBox1.IsInversionTurnedOn(TsInversion.DLog, 1);

	    If CanInv And Not IsOn Then

	        LanerBox1.ApplyInversion(TsInversion.DLog, 1);

	    End If;

	End Sub Button1OnClick;


После выполнения примера для выделенного ряда, если это возможно, будет
 применено преобразование: разность логарифмов к соответствующему периоду
 предыдущего года.


См. также:


[ILanerBox](ILanerBox.htm)


[TsInversion](KeTransform.chm::/Enums/TsInversion.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
