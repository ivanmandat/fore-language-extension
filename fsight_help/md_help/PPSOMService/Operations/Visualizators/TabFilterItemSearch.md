# TabFilterItemSearch: Операция

TabFilterItemSearch: Операция
-


**


# TabFilterItemSearch


## Синтаксис


TabFilterItemResult TabFilterItemSearch(TabSheetId
 tTabSheet, TabFilterItemSearchArg tArg)


## Параметры


tTabSheet. Моникёр
 таблицы.


tArg. Параметры выполнения
 операции.


## Описание


Операция TabFilterItemSearch
 осуществляет поиск элементов в автофильтре, который настроен для таблицы.


## Комментарии


Операция позволяет производить быстрый поиск среди большого количества
 элементов. Для выполнения операции укажите в поле tTabSheet
 моникёр таблицы, в поле tArg.filterItemIndex
 индекс столбца, по которому будет осуществляться поиск, а в поле tArg.text искомый текст. Моникёр
 может быть сформирован на основании моникёра открытого экземпляра объекта,
 с таблицей которого осуществляется работа.


Результатом операции будет набор найденных в автофильтре элементов.


## Пример


Ниже приведён пример поиска элементов в автофильтре. В запросе передаётся
 моникёр для работ с таблицей и параметры поиска. В ответе приходит набор
 найденных элементов.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<TabFilterItemSearch xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tTabSheet xmlns="****">
  <id>S1!M!S!P1!1</id>  </tTabSheet>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <filterItemIndex>1</filterItemIndex>  <text>Темп</text>  </tArg>
  </TabFilterItemSearch>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<TabFilterItemSearchResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" LimitValues="**0**" EmptyValuesInRange="**0**">
[![](../../minus.gif)](../../#)<FilterValues xmlns="****">
  <Value Name="**Темпы изменения объема промышленного производства**" State="**1**" />
  <Value Name="**Темпы роста (снижения) денежных доходов в расчете на душу населения, % к предыдущему периоду**" State="**1**" />
  <Value Name="**Темпы роста (снижения) денежных доходов в расчете на душу населения, % к соответствующему месяцу предыдущего года**" State="**1**" />
  <Value Name="**Темпы роста (снижения) потребительских расходов в расчете на душу населения, % к предыдущему периоду**" State="**1**" />
  <Value Name="**Темпы роста (снижения) потребительских расходов в расчете на душу населения, % к соответствующему месяцу предыдущего года**" State="**1**" />
  </FilterValues>
  </TabFilterItemSearchResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "TabFilterItemSearch" :
  {
   "tTabSheet" :
    {
     "id" : "S1!M!S!P1!1"
    },
   "tArg" :
    {
     "filterItemIndex" : "1",
     "text" : "Темп"
    }
  }
}

### JSON-ответ:


{
 "TabFilterItemSearchResult" :
  {
   "@EmptyValuesInRange" : "0",
   "@LimitValues" : "0",
   "FilterValues" :
    {
     "Value" :
      [
        {
         "@Name" : "Темпы изменения объема промышленного производства",
         "@State" : "1"
        },
        {
         "@Name" : "Темпы роста (снижения) денежных доходов в расчете на душу населения, % к предыдущему периоду",
         "@State" : "1"
        },
        {
         "@Name" : "Темпы роста (снижения) денежных доходов в расчете на душу населения, % к соответствующему месяцу предыдущего года",
         "@State" : "1"
        },
        {
         "@Name" : "Темпы роста (снижения) потребительских расходов в расчете на душу населения, % к предыдущему периоду",
         "@State" : "1"
        },
        {
         "@Name" : "Темпы роста (снижения) потребительских расходов в расчете на душу населения, % к соответствующему месяцу предыдущего года",
         "@State" : "1"
        }
      ]
    }
  }
}


public static TabFilterItemResult FilterItemSearch(string moniker, int columnIndex, string textSearch)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tTab = new TabFilterItemSearch()
    {
        tArg = new TabFilterItemSearchArg()
        {
            filterItemIndex = columnIndex,
            text = textSearch
        },
        tTabSheet = new TabSheetId() { id = moniker }
    };
    // Поиск элементов
    var result = somClient.TabFilterItemSearch(tTab);
    return result;
}


См. также:


[Таблица](Table/tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
