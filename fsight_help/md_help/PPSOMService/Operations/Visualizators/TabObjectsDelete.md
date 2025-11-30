# TabObjectsDelete: Операция

TabObjectsDelete: Операция
-


**


# TabObjectsDelete


## Синтаксис


bool TabObjectsDelete(TabSheetId tTabSheet, TabObjectsDeleteArg
 tArg)


## Параметры


mon. Моникёр
 таблицы.


tArg. Параметры выполнения
 операции.


## Описание


Операция TabObjectsDelete удаляет
 объекты таблицы.


## Комментарии


Операция позволяет удалить один или несколько объектов таблицы с заданными
 идентификаторами. Для выполнения операции укажите в поле tTabSheet
 моникёр таблицы, а в поле tArg.ids
 массив идентификаторов удаляемых объектов. Моникёр может быть сформирован
 на основании моникёра открытого экземпляра объекта, с таблицей которого
 осуществляется работа.


Результатом операции будет логическое значение true,
 если удаление объектов завершилось успешно.


## Пример


Ниже приведён пример удаления двух объектов с листа регламентного отчёта.
 В запросе передаётся моникёр листа регламентного отчёта и массив идентификаторов
 удаляемых объектов. В ответе приходит признак удачного удаления.


	 SOAP JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<TabObjectsDelete xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tTabSheet xmlns="****">
  <id>S1!M!S!P1!1</id>  </tTabSheet>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<ids>
  <it>PrxPicture</it>  <it>PrxChart</it>  </ids>
  </tArg>
  </TabObjectsDelete>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <TabObjectsDeleteResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</TabObjectsDeleteResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "TabObjectsDelete" :
  {
   "tTabSheet" :
    {
     "id" : "S1!M!S!P1!1"
    },
   "tArg" :
    {
     "ids" :
      {
       "it" :
        [
          "PrxPicture",
          "PrxChart"
        ]
      }
    }
  }
}

### JSON-ответ:


{
 "TabObjectsDeleteResult" : "1"
}


public static bool DeleteTabObjects(string moniker, string[] objects)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tTab = new TabObjectsDelete()
    {
        tTabSheet = new TabSheetId() { id = moniker },
        tArg = new TabObjectsDeleteArg()
        {
            ids = objects
        }
    };
    // Удаление объектов таблицы
    var result = somClient.TabObjectsDelete(tTab);
    return result;
}


См. также:


[Таблица](Table/tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
