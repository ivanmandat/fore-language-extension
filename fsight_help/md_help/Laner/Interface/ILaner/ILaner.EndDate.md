# ILaner.EndDate

ILaner.EndDate
-


# ILaner.EndDate


## Синтаксис


EndDate: DateTime;


## Описание


Свойство EndDate определяет
 дату, после которой значения рабочей книги не отображаются.


## Комментарии


Если значение EndDate не задано,
 то дату окончания отображения данных в рабочей книге определяет свойство
 [ILaner.EndDateParamId](ILaner.EndDateParamId.htm).


Если заданы свойства EndDate
 и [ILaner.EndDateParamId](ILaner.EndDateParamId.htm), то дату
 окончания отображения данных в рабочей книге определяет то свойство, которое
 задано последним.


Дата окончания отображения данных должна быть больше, чем дата начала
 отображения данных. Для задания даты начала отображения данных в рабочей
 книге, используйте свойство [ILaner.StartDate](ILaner.StartDate.htm).


Свойство EndDate влияет только
 на отображение данных в рабочей книге. Для определения параметров расчета
 конкретного ряда используйте интерфейс [ILanerTransformPeriod](../ILanerTransformPeriod/ILanerTransformPeriod.htm).


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая книга базы данных временных
 рядов.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Analyzer: IEaxAnalyzer;

	    Laner: ILaner;

	Begin

	    Analyzer := UiErAnalyzer1.ErAnalyzer;

	    Laner := Analyzer.Laner;

	    Laner.StartDate := DateTime.ComposeDay(1990, 02, 01);

	    Laner.EndDate := DateTime.ComposeDay(2015, 05, 01);

	End Sub Button1OnClick;


После выполнения примера будет изменен период отображения данных рабочей
 книги:


	- начало периода - первое февраля 1990-го года;


	- окончание периода - первое мая 2015-го года.


См. также:


[ILaner](ILaner.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
