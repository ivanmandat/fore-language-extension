# ILaner.SaveProblem

ILaner.SaveProblem
-


# ILaner.SaveProblem


## Синтаксис


SaveProblem(SerieIndices: Array): [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Параметры


SerieIndices. Индексы сохраняемых
 рядов, представленные в виде массива. Если значение данного параметра
 Null, то будут сохранены
 все ряды.


## Описание


Метод SaveProblem осуществляет
 сохранение данных рабочей области в виде задачи моделирования.


## Комментарии


Сохранение таблицы данных как задачи моделирования имеет смысл, только
 если в таблице имеются вычисляемые ряды. В противном случае сохраниться
 пустая задача. Задача сохраняется в дочерний объект базы данных временных
 рядов - контейнер моделирования «Преобразования». В процессе сохранения
 создаются следующие объекты:


	- Моделируемая переменная
	 - переменные моделирования будут созданы на основе вычисляемых рядов,
	 исходные ряды (показатели) будут для них входными (объясняющими) переменными.


	- Модель - описывает преобразование
	 над моделируемой переменной.


	- Метамодель - описывает
	 цепочку расчета моделей.


	- Задача - формирует задачу
	 над метамоделями.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 TabSheetBox, UiErAnalyzer с наименованиями Button1, TabSheetBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для TabSheetBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Metabase, Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ErA: IEaxAnalyzer;

	    Laner: ILaner;

	    ar: Array[1] Of Integer;

	    ProblDesc: IMetabaseObjectDescriptor;

	Begin

	    ErA := UiErAnalyzer1.ErAnalyzer;

	    Laner := ErA.Laner;

	    ar[0] := 0;

	    ProblDesc := Laner.SaveProblem(ar);

	    Debug.WriteLine(ProblDesc.Name);

	End Sub Button1OnClick;


После выполнения примера первый ряд данных будет сохранен в виде задачи
 моделирования. Наименование задачи будет выведено в окно консоли.


См. также:


[ILaner](ILaner.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
