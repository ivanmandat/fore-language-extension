# IMetabaseObject.FlushInstances

IMetabaseObject.FlushInstances
-


# IMetabaseObject.FlushInstances


## Синтаксис


FlushInstances: Boolean;


## Описание


Метод FlushInstances осуществляет
 очистку кешированных данных объекта.


## Комментарии


Метод актуально использовать если необходимо сбросить кеш открытого
 объекта.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента UiDimension с наименованием
 UiDimension1 и каких-либо компонентов, используемых для отображения данных
 справочника. Справочник, подключенный к компоненту UiDimension1, имеет
 один параметр.


Добавьте ссылки на системные сборки: Dimensions, Metabase.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MObj: IMetabaseObject;

	    Params: IMetabaseObjectParamValues;

	Begin

	    MObj := UiDimension1.Dimension As IMetabaseObject;

	    MObj.FlushInstances;

	    Params := MObj.Params.CreateEmptyValues;

	    Params.Item(0).Value := 1;

	    UiDimension1.Instance := MObj.Open(Params);

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будет переоткрыт справочник,
 подключенный к компоненту UiDimension1. Кешированные данные справочника
 перед повторным открытием будут сброшены.


См. также:


[IMetabaseObject](IMetabaseObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
