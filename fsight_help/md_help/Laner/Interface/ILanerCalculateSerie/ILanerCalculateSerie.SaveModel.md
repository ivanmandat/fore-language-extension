# ILanerCalculateSerie.SaveModel

ILanerCalculateSerie.SaveModel
-


# ILanerCalculateSerie.SaveModel


## Синтаксис


SaveModel: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Метод SaveModel сохраняет вычисляемый
 ряд в виде модели.


## Комментарии


Если используется СУБД MSSQL и база данных временных рядов использует
 отдельную БД для хранения данных, то для корректного выполнения метода
 требуется соблюдение одного из следующих условий:


	- БД для хранения данных и БД, используемого репозитория НСИ,
	 должны располагаться в одном репозитории;


	- в БД для хранения данных и в БД, используемого репозитория НСИ,
	 должны быть отключены [роли
	 приложения](UiNavObj.chm::/database/UiDb_database_master_property.htm).


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов. В рабочей книге должен быть создан только один вычисляемый
 ряд и для него должны быть заданы значения всех атрибутов.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Metabase, Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ErAn: IEaxAnalyzer;

	    Laner: ILaner;

	    Serie: ILanerSerie;

	    CalculateSerie: ILanerCalculateSerie;

	    i: Integer;

	Begin

	    ErAn := UiErAnalyzer1.ErAnalyzer;

	    Laner := ErAn.Laner;

	    For i := 0 To Laner.Series.Count - 1 Do

	        Serie := Laner.Series.Item(i);

	        If Serie.Kind = LnSerieKind.Calculate Then

	            CalculateSerie := Serie As ILanerCalculateSerie;

	            CalculateSerie.SaveModel;

	            Debug.WriteLine(CalculateSerie.Model.Name);

	        End If;

	    End For;

	End Sub Button1OnClick;


После выполнения примера вычисляемый ряд будет сохранён в виде модели,
 в окно консоли будет выведено её наименование.


См. также:


[ILanerCalculateSerie](ILanerCalculateSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
