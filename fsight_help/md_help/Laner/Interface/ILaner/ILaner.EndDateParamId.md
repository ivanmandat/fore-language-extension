# ILaner.EndDateParamId

ILaner.EndDateParamId
-


# ILaner.EndDateParamId


## Синтаксис


EndDateParamId: String;


## Описание


Свойство EndDateParamId определяет
 идентификатор параметра, задающего дату окончания отображения данных в
 рабочей книге.


## Комментарии


Для корректной работы параметр, указанный в свойстве EndDateParamId,
 должен иметь тип «Дата и время» ([DbDataType.DateTime](Dal.chm::/Enums/DbDataType.htm))
 или «Дата» ([DbDataType.Date](Dal.chm::/Enums/DbDataType.htm)).
 Для определения типа параметра используйте свойство [IMetabaseObjectParam.DataType](KeSom.chm::/Interface/IMetabaseObjectParam/IMetabaseObjectParam.DataType.htm).


Если значение EndDateParamId
 не задано, то дату окончания отображения данных в рабочей книге определяет
 свойство [ILaner.EndDate](ILaner.EndDate.htm).


Если заданы свойства EndDateParamId
 и [ILaner.EndDate](ILaner.EndDate.htm), то дату окончания отображения
 данных в рабочей книге определяет то свойство, которое задано последним.


Дата окончания отображения данных должна быть больше, чем дата начала
 отображения данных. Для задания параметра, определяющего дату начала отображения
 данных в рабочей книге, используйте свойство [ILaner.StartDateParamId](ILaner.StartDateParamId.htm).


Свойство EndDateParamId влияет
 только на отображение данных в рабочей книге. Для определения параметров
 расчета конкретного ряда используйте интерфейс [ILanerTransformPeriod](../ILanerTransformPeriod/ILanerTransformPeriod.htm).


## Пример


Для выполнения примера предполагается наличие на форме компонентов LanerBox,
 UiErAnalyzer с наименованиями LanerBox1 и UiErAnalyzer1 соответственно.
 UiErAnalyzer1 является источником данных для LanerBox1. В репозитории
 должна существовать рабочая книга с идентификатором «WBK».


Добавьте ссылки на системные сборки: Dal, Express, Laner, Metabase.


	Sub SetWbkParam;

	Var

	    mb: IMetabase;

	    Wbk: IMetabaseObject;

	    WbkParams: IMetabaseObjectParams;

	    Param: IMetabaseObjectParam;

	    Eax: IEaxAnalyzer;

	    Laner: ILaner;

	    ObjI: ImetabaseObjectInstance;

	Begin

	    mb := MetabaseClass.Active;

	    // Получаем рабочую книгу

	    Wbk := mb.ItemById("WBK").Edit;

	    // Получаем параметры рабочей книги

	    WbkParams := Wbk.Params;

	    // Очищаем коллекцию параметров

	    WbkParams.Clear;

	    // Добавляем параметр,

	    // определяющий дату начала отображения данных

	    Param := WbkParams.Add;

	    Param.DataType := DbDataType.Date;

	    Param.DefaultValue := "01.01.2002";

	    Param.Id := "START_DATE";

	    Param.Name := "Дата начала";

	    // Добавляем параметр,

	    // определяющий дату окончания отображения данных

	    Param := WbkParams.Add;

	    Param.DataType := DbDataType.Date;

	    Param.Id := "END_DATE";

	    Param.Name := "Дата окончания";

	    Param.DefaultValue := "31.12.2010";

	    // Сохраняем изменения

	    Wbk.Save;

	    // Получаем объект для настройки рабочей книги

	    Wbk.Bind;

	    Eax := Wbk As IEaxAnalyzer;

	    Laner := Eax.Laner;

	    // Задаем даты начала и окончания отображения данных параметрами

	    Laner.StartDateParamId := "START_DATE";

	    Laner.EndDateParamId := "END_DATE";

	    // Открываем рабочую книгу со значениями параметров по умолчанию

	    ObjI := Wbk.Open(Eax.OwnParamValues);

	    UiErAnalyzer1.Active := False;

	    UiErAnalyzer1.Instance := ObjI;

	    UiErAnalyzer1.Active := True;

	End Sub SetWbkParam;


Результат выполнения примера: в рабочей книге «WBK» заданы параметры,
 определяющие даты начала и окончания отображения данных. Рабочая книга
 открыта для просмотра LanerBox
 в по значениям параметров, заданным по умолчанию.


См. также:


[ILaner](ILaner.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
