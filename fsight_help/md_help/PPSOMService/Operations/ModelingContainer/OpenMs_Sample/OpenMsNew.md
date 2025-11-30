# Создание контейнера моделирования

Создание контейнера моделирования
-


**


# Создание контейнера моделирования


Ниже приведен пример использования операции [OpenMs](../OpenMs.htm) для создания контейнера моделирования.
 В запросе передаются: моникёр репозитория и имя, идентификатор создаваемого
 контейнера. В ответе приходит моникёр открытого экземпляра контейнера
 моделирования. Какие-либо дополнительные данные не извлекаются.


Примечание.
 Перед созданием контейнера моделирования убедитесь, что в текущем репозитории
 назначен репозиторий НСИ, используемый по умолчанию. Для назначения репозитория
 НСИ по умолчанию используйте свойство [ISpecialObjects.SpecialObject](kesom.chm::/Interface/ISpecialObjects/ISpecialObjects.SpecialObject.htm)(MetabaseSpecialObject.RdsDatabase).


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<OpenMs xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tOb xmlns="****">
  <id>GEGBFKLHGPMOFOAEIMFEBNKILLAKNJBEIKKFGPFLECLAJIMA!M</id>  </tOb>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<args>
[![](../../../minus.gif)](../../../#)<openNew>
  <id>MS_NEW</id>  <name>New Model Space</name>  </openNew>
  </args>
  </tArg>
  </OpenMs>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<OpenMsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>GEGBFKLHGPMOFOAEIMFEBNKILLAKNJBEIKKFGPFLECLAJIMA!M!S!CHIPGGCMHGPMOFOAELLCEANGHCHAGCIGEALCDHOJCDACJCCGL</id>  </id>
  <readOnly xmlns="****">0</readOnly>  </OpenMsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenMs" :
  {
   "tOb" :
    {
     "id" : "GEGBFKLHGPMOFOAEIMFEBNKILLAKNJBEIKKFGPFLECLAJIMA!M"
    },
   "tArg" :
    {
     "args" :
      {
       "openNew" :
        {
         "id" : "MS_NEW",
         "name" : "New Model Space"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "OpenMsResult" :
  {
   "id" :
    {
     "id" : "GEGBFKLHGPMOFOAEIMFEBNKILLAKNJBEIKKFGPFLECLAJIMA!M!S!CHIPGGCMHGPMOFOAELLCEANGHCHAGCIGEALCDHOJCDACJCCGL"
    },
   "readOnly" : "0"
  }
}


public static OpenMsResult OpenMsNew(MbId mb, string msId, string msName)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Задаём параметры выполнения операции
    var tMsOp = new OpenMs()
    {
        tArg = new OpenMsArg()
        {
            // Задаём параметры создания контейнера
            args = new MsOpenArgs()
            {
                openNew = new MsOpenNew()
                {
                    id = msId,
                    name = msName,
                    parent = null
                }
            }
        },
        // Формирование моникера объекта
        tOb = new OdId() { id = mb.id }
    };
    // Создание контейнера моделирования
    var result = somClient.OpenMs(tMsOp);
    return result;
}


См. также:


[OpenMs:
 Операция](../OpenMs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
