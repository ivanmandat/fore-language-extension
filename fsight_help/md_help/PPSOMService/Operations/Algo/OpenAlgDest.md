# OpenAlgDest: Операция

OpenAlgDest: Операция
-


**


# OpenAlgDest


## Синтаксис


OpenAlgDestResult OpenAlgDest(AlgId tAlg, OpenAlgDestArg
 tArg)


## Параметры


tAlg. Моникёр
 экземпляра алгоритма расчёта показателей или его блока.


tArg. Параметры выполнения
 операции.


## Описание


Операция OpenAlgDest открывает
 приёмник блока расчёта или блока контроля в регламентном отчёте.


## Комментарии


Для выполнения операции укажите в поле tAlg
 моникёр алгоритма расчёта или его блока, а в поле tArg.calcObjectKey
 ключ блока расчёта или блока контроля. Моникёр может быть получен
 при выполнении операции [OpenAlg](OpenAlg.htm).


Результатом операции будет моникёр регламентного отчёта, в котором на
 базе приёмника блока будет построена аналитическая область данных.


## Пример


Ниже приведён пример открытия приёмника блока расчёта в регламентном
 отчёте. В запросе передаётся моникёр алгоритма расчёта и ключ блока расчёта.
 В ответе приходит полученный моникёр регламентного отчёта.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<OpenAlgDest xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tAlg xmlns="****">
  <id>S1!M!S!C15</id>  </tAlg>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <calcObjectKey>231308</calcObjectKey>  </tArg>
  </OpenAlgDest>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<OpenAlgDestResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <prxReport xmlns="****">S1!M!S!C16</prxReport>  </OpenAlgDestResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenAlgDest" :
  {
   "tAlg" :
    {
     "id" : "S1!M!S!C15"
    },
   "tArg" :
    {
     "calcObjectKey" : "231308"
    }
  }
}

### JSON-ответ:


{
 "OpenAlgDestResult" :
  {
   "prxReport" : "S1!M!S!C16"
  }
}


public static OpenAlgDestResult OpenDestInReport(string moniker, uint key)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tOpen = new OpenAlgDest()
    {
        tAlg = new AlgId() { id = moniker },
        tArg = new OpenAlgDestArg()
        {
            calcObjectKey = key
        }
    };
    //Открытие приёмника в регламентном отчёте
    var result = somClient.OpenAlgDest(tOpen);
    return result;
}


См. также:


[Работа с
 алгоритмами расчёта показателей](Algo_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
