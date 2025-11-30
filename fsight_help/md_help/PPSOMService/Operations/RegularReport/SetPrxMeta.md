# SetPrxMeta: Операция

SetPrxMeta: Операция
-


**


# SetPrxMeta


## Синтаксис


bool SetPrxMeta(string mon, PrxMetaArg tArg)


## Параметры


mon. Моникёр
 открытого экземпляра регламентного отчёта.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetPrxMeta изменяет
 метаданные регламентного отчёта.


## Комментарии


Операция позволяет изменить настройки различных элементов регламентного
 отчёта. Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра регламентного отчёта, а в поле tArg
 поля, значения которых необходимо изменить.


Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).
 Регламентный отчёт должен быть открыт на редактирование.


В поле tArg.meta задайте те
 поля, которые необходимо изменить. Для элементов, в которых производится
 изменение, обязательно должен быть определён ключ (поле k).


Операция возвращает значение true,
 если изменения были применены удачно.


Для сохранения изменений используйте операции [SaveObject](../Repository/SaveObject.htm)
 или [SaveObjectAs](../Repository/SaveObjectAs.htm).


## Пример


Ниже приведён пример переименования листа в регламентном отчёте. В запросе
 передаётся моникёр открытого экземпляра регламентного отчёта, ключ листа
 и новое наименование листа. В ответе приходит признак успешного применения
 изменений.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetPrxMeta xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<meta>
[![](../../minus.gif)](../../#)<sheets>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <n>Данные</n>  </it>
  </its>
  </sheets>
  </meta>
  </tArg>
  </SetPrxMeta>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetPrxMetaResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetPrxMetaResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetPrxMeta" :
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
               "k" : "1",
               "n" : "Данные"
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
 "SetPrxMetaResult" : "1"
}


public static bool SetPrxSheets(string moniker, string newSheetName)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetPrxMeta()
    {
        tArg = new PrxMetaArg()
        {
            meta = new PrxMetaData()
            {
                sheets = new PrxMetaSheets()
                {
                    its = new PrxMetaSheet[1]
                    {
                        new PrxMetaSheet() { k = 1, n = newSheetName }
                    }
                }
            }
        },
        mon = moniker
    };
    //Изменение параметров листов
    var result = somClient.SetPrxMeta(tSet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
