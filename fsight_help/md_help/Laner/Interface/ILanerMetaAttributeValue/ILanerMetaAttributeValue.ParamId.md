# ILanerMetaAttributeValue.ParamId

ILanerMetaAttributeValue.ParamId
-


# ILanerMetaAttributeValue.ParamId


## Синтаксис


ParamId: String;


## Описание


Свойство ParamId определяет
 идентификатор параметра, задающего значение атрибута.


## Комментарии


Если идентификатор параметра не задан, то значение параметра определяет
 свойство [ILanerMetaAttributeValue.Value](ILanerMetaAttributeValue.Value.htm).


Если заданы свойства ParamId
 и [ILanerMetaAttributeValue.Value](ILanerMetaAttributeValue.Value.htm),
 то значение атрибута определяет то свойство, которое задано последним.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов, содержащая ряды и целочисленный параметр с идентификатором «COUNTRY_PARAM».
 В данной БД временных рядов должен присутствовать пользовательский атрибут
 временных рядов с идентификатором «COUNTRY».


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Tab, Transform.


	Sub MetaAttrVal;

	Var

	    Eax: IEaxAnalyzer;

	    ParamProv: ITsParamProvider;

	    ParamVal: ITsModelParamValue;

	    Series: ILanerSerie;

	    AttrValList: ILanerMetaAttributeValueList;

	    AttrVal: ILanerMetaAttributeValue;

	    Laner: ILaner;

	Begin

	    Eax := UiErAnalyzer1.ErAnalyzer;

	    // Получаем объект для работы с параметрами

	    ParamProv := Eax.ParamProvider As ITsParamProvider;

	    // Задаем значение параметра «COUNTRY_PARAM»

	    ParamVal := ParamProv.ParamValues.FindById("COUNTRY_PARAM");

	    ParamVal.Value := 914;

	    // Получаем выделенный  ряд

	    Series := LanerBox1.SelectedSeries(0);

	    // Получаем коллекцию значений атрибутов ряда

	    AttrValList := Series.MetaAttributeValueList;

	    // Указываем, что значение атрибута «COUNTRY»
	 определяет параметр «COUNTRY_PARAM»

	    AttrVal := AttrValList.FindById("COUNTRY");

	    AttrVal.ParamId := "COUNTRY_PARAM";

	    // Обновляем данные

	    Laner := Eax.Laner;

	    Laner.Refresh;

	End Sub MetaAttrVal;


Результат выполнения примера: для ряда, выделенного в компоненте «LanerBox1»,
 значение атрибута «COUNTRY» будет определять параметр «COUNTRY_PARAM».


См. также:


[ILanerMetaAttributeValue](ILanerMetaAttributeValue.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
