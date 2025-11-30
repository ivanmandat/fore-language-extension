# GetPrxMeta: Операция

GetPrxMeta: Операция
-


**


# GetPrxMeta


## Синтаксис


PrxMetaResult GetPrxMeta(string mon, PrxMetaArg
 tArg)


## Параметры


mon. Моникёр
 открытого экземпляра регламентного отчёта.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetPrxMeta извлекает
 метаданные регламентного отчёта.


## Комментарии


Операция позволяет получить настройки различных элементов регламентного
 отчёта. Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра регламентного отчёта, а в поле tArg параметры
 извлечения метаданных.


Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


В поле tArg.meta задайте пустые
 значения или значения по умолчанию для тех полей, значения которых необходимо
 получить. Для коллекций укажите один элемент. Для получения информации
 о каком-либо конкретном элементе регламентного отчёта укажите его ключ
 в метаданных. При указании в качестве ключа значения «-1» будет получена
 информация обо всех элементах данного типа.


## Пример


Ниже приведён пример получения информации о листах регламентного отчёта.
 В запросе передаётся моникёр для работы с регламентным отчётом и список
 полей, значения которых необходимо получить. В ответе приходит запрошенная
 информация.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetPrxMeta xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<meta>
[![](../../minus.gif)](../../#)<sheets>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>-1</k>  <n />
  <type>Table</type>  </it>
  </its>
  </sheets>
  </meta>
  </tArg>
  </GetPrxMeta>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetPrxMetaResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!P1</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<sheets>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <n>Данные</n>  <type>Table</type>  </it>
  </its>
  </sheets>
  </meta>
  </GetPrxMetaResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetPrxMeta" :
  {
   "mon" : "S1!M!S!P1",
   "tArg" :
    {
     "meta" :
      {
       "sheets" :
        {
         "its" :
          {
           "it" :
            [
              {
               "k" : "-1",
               "n" : "",
               "type" : "Table"
              }
            ]
          }
        }
      }
    }
  }
}

### JSON-ответ:


{
 "GetPrxMetaResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!P1"
    },
   "meta" :
    {
     "sheets" :
      {
       "its" :
        {
         "it" :
          [
            {
             "k" : "1",
             "n" : "Данные",
             "type" : "Table"
            }
          ]
        }
      }
    }
  }
}


public static PrxMetaResult GetPrxSheets(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetPrxMeta()
    {
        tArg = new PrxMetaArg()
        {
            meta = new PrxMetaData()
            {
                sheets = new PrxMetaSheets()
                {
                    its = new PrxMetaSheet[1]
                    {
                        new PrxMetaSheet() { k = uint.MaxValue, n= "", type = PrxSheetType.Table }
                    }
                }
            }
        },
        mon = moniker
    };
    //Получение информации о листах отчёта
    var result = somClient.GetPrxMeta(tGet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
