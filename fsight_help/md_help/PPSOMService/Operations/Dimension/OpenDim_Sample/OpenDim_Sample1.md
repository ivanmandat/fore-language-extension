# Открытие параметрического справочника: Операция OpenDim

Открытие параметрического справочника: Операция OpenDim
-


**


# Открытие параметрического справочника


Ниже приведен пример использования операции [OpenDim](../OpenDim.htm)
 для открытия параметрического справочника репозитория. В запросе передается
 моникёр объекта, являющегося справочником, и значения параметров. Предполагается,
 что параметры в структуре справочника имеют идентификаторы «YEAR_START»
 и «YEAR_FINISH». В ответе приходит моникёр открытого справочника. Какие-либо
 дополнительные данные справочника не извлекаются.


В примере C# используется функция FindObjectById,
 код которой приведён в примере «[Получение
 описания объекта по его идентификатору](../../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<OpenDim xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tObject xmlns="****">
  <id>S1!M!128</id>  </tObject>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<openArgs>
[![](../../../minus.gif)](../../../#)<args>
[![](../../../minus.gif)](../../../#)<it>
  <k>18446744073709551615</k>  <id>YEAR_START</id>  <value>2000</value>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>18446744073709551615</k>  <id>YEAR_FINISH</id>  <value>2001</value>  </it>
  </args>
  </openArgs>
  </tArg>
  </OpenDim>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<OpenDimResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!S2</id>  </id>
  </OpenDimResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenDim" :
  {
   "tObject" :
    {
     "id" : "S1!M!128"
    },
   "tArg" :
    {
     "openArgs" :
      {
       "args" :
        {
         "it" :
          [
            {
             "k" : "18446744073709551615",
             "id" : "YEAR_START",
             "value" : "2000"
            },
            {
             "k" : "18446744073709551615",
             "id" : "YEAR_FINISH",
             "value" : "2001"
            }
          ]
        }
      }
    }
  }
}

### JSON-ответ:


{
 "OpenDimResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!S2"
    }
  }
}


public static OpenDimResult OpenParamDimension(MbId mb, string id)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tOpen = new OpenDim()
    {
        tArg = new OpenDimArg()
        {
            openArgs = new DmOpenArgs()
            {
                //Параметры для параметрического справочника
                args = new OdArg[2]
                {
                    new OdArg(){id = "YEAR_START", value = "2000", k = uint.MaxValue},
                    new OdArg(){id = "YEAR_FINISH", value = "2001", k = uint.MaxValue}
                }
            }
        },
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, id).k }
    };
    //Открытие параметрического справочника
    var tResult = somClient.OpenDim(tOpen);
    return tResult;
}


См. также:


[OpenDim:
 Операция](../OpenDim.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
