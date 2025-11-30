# PrxMetaSheetUserCommentsCRUD: Операция

PrxMetaSheetUserCommentsCRUD: Операция
-


**


# PrxMetaSheetUserCommentsCRUD


## Синтаксис


SheetUserComments PrxMetaSheetUserCommentsCRUD(string
 mon, SheetUserCommentRequest tArg)


## Параметры


mon. Моникёр
 листа регламентного отчёта.


tArg. Параметры выполнения
 операции.


## Описание


Операция PrxMetaSheetUserCommentsCRUD
 предназначена для работы с комментариями у ячейки с данными.


## Комментарии


Операция позволяет создавать, получать или удалять комментарии у ячеек
 с данными. Актуально, если для отчёта в качестве источника  выступает
 стандартный куб, для которого включено хранение комментариев. Для выполнения
 операции укажите в поле mon моникёр
 в формате «Моникёр экземпляра рег.отчёта!Sheets!Ключ
 листа», а в поле tArg
 необходимые параметры для работы с комментариями. Моникёр экземпляра регламентного
 отчёта может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Результатом выполнения операции будет коллекция комментариев, которая
 сформируется после выполнения действий с комментарием у ячейки.


## Пример


Ниже приведён пример добавления комментария для ячейки с данными.  В
 запросе передаётся моникёр листа регламентного отчёта и параметры добавляемого
 комментария. В ответе возвращается информация о добавленном комментарии.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<PrxMetaSheetUserCommentsCRUD xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">KGBKAFPLHHHFGOAEODMMGFGHIBKEPFOEILFBAIBFFGGFJCEI!M!S!PMGBFELPLHHHFGOAEAAMGLFFBDLECLELEBJOMIJLKCLINAMNB!Sheets!1</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <row>2</row>  <col>2</col>  <text>Данные устарели, необходимо обновить.</text>  <operation>Add</operation>  </tArg>
  </PrxMetaSheetUserCommentsCRUD>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<PrxMetaSheetUserCommentsCRUDResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<its xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <k>21</k>  <vis>1</vis>  <text>Данные устарели, необходимо обновить.</text>  <ts>2025-04-08T17:48:42.706</ts>  <user>Пользователь ADMIN</user>  <rights>65535</rights>[![](../../minus.gif)](../../#)<coords>
[![](../../minus.gif)](../../#)<it>
  <row>2</row>  <col>2</col>  </it>
  </coords>
  </it>
  </its>
  </PrxMetaSheetUserCommentsCRUDResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "PrxMetaSheetUserCommentsCRUD" :
  {
   "mon" : "KGBKAFPLHHHFGOAEODMMGFGHIBKEPFOEILFBAIBFFGGFJCEI!M!S!PMGBFELPLHHHFGOAEAAMGLFFBDLECLELEBJOMIJLKCLINAMNB!Sheets!1",
   "tArg" :
    {
     "row" : "2",
     "col" : "2",
     "text" : "Данные устарели, необходимо обновить.",
     "operation" : "Add"
    }
  }
}

### JSON-ответ:


{
 "PrxMetaSheetUserCommentsCRUDResult" :
  {
   "its" :
    {
     "it" :
      [
        {
         "k" : "21",
         "vis" : "1",
         "text" : "Данные устарели, необходимо обновить.",
         "ts" : "2025-04-08T17:48:42.706",
         "user" : "Пользователь ADMIN",
         "rights" : "65535",
         "coords" :
          {
           "it" :
            {
             "row" : "2",
             "col" : "2"
            }
          }
        }
      ]
    }
  }
}


public static SheetUserComments PrxMetaSheetUserCommentsCRUD(string moniker, uint sheetKey)
        {
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tAdd = new PrxMetaSheetUserCommentsCRUD()
    {
        tArg = new SheetUserCommentRequest()
        {
            operation = ListOperation.Add,
            row = 2,
            col = 2,
            text = "Данные устарели, необходимо обновить."
        },
        mon = moniker + "!Sheets!" + sheetKey
    };
    // Добавление комментария для ячейки с данными
    var result = somClient.PrxMetaSheetUserCommentsCRUD(tAdd);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
