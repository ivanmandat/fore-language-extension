# IEaxAnalyzeCore.CreateDataSourceCache

IEaxAnalyzeCore.CreateDataSourceCache
-


# IEaxAnalyzeCore.CreateDataSourceCache


## Синтаксис


CreateDataSourceCache(Database: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm)):
 Boolean;


## Параметры


Database. База данных репозитория,
 в которую будут сохранены кешируемые данные.


## Описание


Метод CreateDataSourceCache
 создает объект кеширования источника данных экспресс-отчета и возвращает
 результат его создания.


## Комментарии


После использования метода CreateDataSourceCache
 выполните метод [IEaxAnalyzeCore.RefreshDataSourceCache](IEaxAnalyzeCore.RefreshDataSourceCache.htm).


Метод возвращает результат выполнения операции создания объекта кеширования:


	- True. Операция создания
	 выполнена успешно;


	- False. Операция создания
	 не выполнена.


## Пример


Для выполнения примера предполагается наличие экспресс-отчета с идентификатором
 EXPRESS_REPORT и формы, содержащей кнопку с идентификатором «Button1».


Добавьте ссылки на системные сборки: Express, Metabase.


Пример является обработчиком события OnClick для компонента «Button1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    Desc: IMetabaseObjectDescriptor;

	    Eax: IEaxAnalyzer;

	Begin

	    MB := MetabaseClass.Active;

	    Desc := MB.ItemById("DB");

	    Eax := MB.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    Eax.ClearDataSourceCache;

	    Debug.WriteLine("Создан: " + Eax.CreateDataSourceCache(Desc).ToString);

	    Eax.RefreshDataSourceCache;

	    Debug.WriteLine("Есть ли объект кеширования: " + Eax.IsDataSourceCacheExist.ToString);

	    Debug.WriteLine("Название куба-источника: " + Eax.DataSourceCache.Parent.Name);

	End Sub Button1OnClick;


После выполнения примера в базе данных с идентификатором DB для
 источника экспресс-отчета будет создан объект кеширования. В окне консоли
 будет выведен результат его создания, результат проверки на наличие объекта
 кеширования и название куба-источника.


См. также:


[IEaxAnalyzeCore](IEaxAnalyzeCore.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
