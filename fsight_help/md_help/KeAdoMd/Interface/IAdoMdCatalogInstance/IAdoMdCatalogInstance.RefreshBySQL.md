# IAdoMdCatalogInstance.RefreshBySQL

IAdoMdCatalogInstance.RefreshBySQL
-


# IAdoMdCatalogInstance.RefreshBySQL


## Синтаксис


RefreshBySQL(SqlText:
 String);


## Параметры


SqlText. Текст MDX-запроса.


## Описание


Метод RefreshBySQL обновляет
 содержимое каталога ADOMD путем выполнения указанного MDX-запроса.


## Комментарии


Если в запросе указан еще не существующий куб ADOMD, то он будет создан.


Имеется ряд ограничений, накладываемых на текст указываемого MDX-запроса:


	- Ключевое слово NON EMPTY нельзя использовать в предложении оси,
	 вместо него следует использовать функцию [NonEmpty](https://msdn.microsoft.com/ru-ru/library/ms145988.aspx).
	 Функция недоступна при работе с базой данных на базе SAP NetWeaver
	 BW;


	- Условие HAVING нельзя использовать в предложении оси, вместо
	 него следует использовать функцию [Filter](https://msdn.microsoft.com/ru-ru/library/ms146037.aspx);


	- По умолчанию в подзапросах выборки запрещены вычисляемые элементы.
	 Это ограничение можно изменить путем присвоения значения «1» параметру
	 SubQueries в свойстве [IAdoMdCatalog.ProviderString](../IAdoMdCatalog/IAdoMdCatalog.ProviderString.htm).


Для обновления содержимого каталога ADOMD в соответствии с его содержимым
 на сервере используйте метод [IAdoMdCatalogInstance.Refresh](IAdoMdCatalogInstance.Refresh.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории каталога
 ADOMD с идентификатором «ADOMDTest». В данном каталоге имеются необходимые
 для создания куба измерения ADOMD. Добавьте ссылки на системные сборки
 «AdoMd», «Metabase».


			Sub UserProc;

Var

    MB: IMetabase;

    Catalog: IAdoMdCatalogInstance;

    MDX: String;

Begin

    MB := MetabaseClass.Active;

    Catalog := MB.ItemById("ADOMDTest").Open(Null) As IAdoMdCatalogInstance;

    //MDX-запрос

    MDX := "select [Commodities].[Commodity].members on rows, [Time].[Year].members on columns from [PricesForecast] where [Measures].[Value]";

    //Создание нового куба на MDX-запросе

    Catalog.RefreshBySQL(MDX);

End Sub UserProc;


При выполнении примера в каталоге ADOMD на базе указанного MDX-запроса
 будет создан новый куб ADOMD.


См. также:


[IAdoMdCatalogInstance](IAdoMdCatalogInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
