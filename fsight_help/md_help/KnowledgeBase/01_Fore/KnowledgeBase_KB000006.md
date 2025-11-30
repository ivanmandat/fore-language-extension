# Неэффективное написание кода

Неэффективное написание кода
-


# Неэффективное написание кода (использование длинных конструкций)


Номер статьи: KB000006


## Общие сведения


Связанные блоки:


	- [Fore](Fore.chm::/Fore_Title.htm)


## Описание


При анализе прикладного кода было выявлено его неэффективное написание,
 способствующее росту используемой памяти и влияющее на скорость работы
 приложений.


Ниже приведен пример неэффективного фрагмента кода, содержащий длинные
 конструкции («паровозики»):


	Var Report: IPrxReport;

	Begin

	    Report := UiReport1.Report;

	    Report.ActiveSheet.Table.Cells(11, 0, 11, 28).Style.BorderStyle(Tabborder.EdgeBottom) := TabBorderStyle.Continuous;

	    Report.ActiveSheet.Table.Cells(11, 0, 11, 28).Style.BorderStyle(Tabborder.EdgeTop) := TabBorderStyle.Continuous;

	    Report.ActiveSheet.Table.Cells(11, 0, 11, 28).Style.BorderStyle(Tabborder.EdgeRight) := TabBorderStyle.Continuous;

	    Report.ActiveSheet.Table.Cells(11, 0, 11, 28).Style.BorderStyle(Tabborder.EdgeLeft) := TabBorderStyle.Continuous;

	    Report.ActiveSheet.Table.Cells(11, 0, 11, 28).Style.BorderStyle(Tabborder.InsideHorizontal) := TabBorderStyle.Continuous;

	End;


Неэффективность данного кода объясняется тем, что в каждой длинной строке
 создается порядка четырех промежуточных объектов.


Фрагмент должен быть написан следующим образом:


	Var Report: IPrxReport;

	    TabCellStyle: ITabCellStyle;

	Begin

	    Report := UiReport1.Report;

	    TabCellStyle := Report.ActiveSheet.Table.Cells(11, 0, 11, 28).Style;

	    TabCellStyle.BorderStyle(Tabborder.EdgeBottom) := TabBorderStyle.Continuous;

	    TabCellStyle.BorderStyle(Tabborder.EdgeTop) := TabBorderStyle.Continuous;

	    TabCellStyle.BorderStyle(Tabborder.EdgeRight) := TabBorderStyle.Continuous;

	    TabCellStyle.BorderStyle(Tabborder.EdgeLeft) := TabBorderStyle.Continuous;

	    TabCellStyle.BorderStyle(Tabborder.InsideHorizontal) := TabBorderStyle.Continuous;

	End;


См. также:


[База
 знаний разработчиков](../KnowledgeBase_Intro.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
