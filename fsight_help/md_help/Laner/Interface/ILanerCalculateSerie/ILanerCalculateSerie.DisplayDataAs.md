# ILanerCalculateSerie.DisplayDataAs

ILanerCalculateSerie.DisplayDataAs
-


# ILanerCalculateSerie.DisplayDataAs


## Синтаксис


DisplayDataAs: [LnDataDisplayType](../../Enums/LnDataDisplayType.htm);


## Описание


Свойство DisplayDataAs определяет
 режим отображения значений для вычисляемого ряда.


## Комментарии


Режим отображения определяется значением перечисления [LnDataDisplayType](../../Enums/LnDataDisplayType.htm):


	- LnDataDisplayType.CalculatedValues.
	 В рабочей книге отображаются рассчитанные значения ряда.


	- LnDataDisplayType.SourceValues.
	 В рабочей книге отображаются значения, хранящиеся в БД, при этом подсвечены
	 ячейки, хранимые значения которых отличаются от рассчитанных.


Для выбора режима отображения всей рабочей книги используйте [ILaner.DisplayDataAs](../ILaner/ILaner.DisplayDataAs.htm).


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов, содержащая ряды данных.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Tab.


В рабочей книге выделите только один ряд и нажмите кнопку Button1. Будет
 выполнена процедура:


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    pSeries: ILanerCalculateSerie;

	Begin

	    pSeries := LanerBox1.SelectedSeries(0) As ILanerCalculateSerie;

	    pSeries.DisplayDataAs := LnDataDisplayType.SourceValues;

	    If pSeries.HasDiscrepancies Then

	        Debug.WriteLine("Сохраненные данные ряда отличаются от рассчитанных");

	    End If;

	End Sub Button1OnClick;


После выполнения примера выделенный ряд будет переключен в режим отображения
 данных, хранящихся в БД. Если сохраненные данные ряда отличаются от рассчитанных,
 то в окно консоли будет выведено соответствующее сообщение.


См. также:


[ILanerCalculateSerie](ILanerCalculateSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
