# GetSemanticLayerSources: Операция

GetSemanticLayerSources: Операция
-


**


# GetSemanticLayerSources


## Синтаксис


SemanticLayerSources GetSemanticLayerSources(string
 mon, SemanticLayerSources tArg)


## Параметры


mon. Моникёр
 для работы с источниками модели данных.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetSemanticLayerSources
 получает настройки источников модели данных.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра модели данных с постфиксом !Sources,
 а в поле tArg пустые значения
 или значения по умолчанию для тех полей, значения которых необходимо получить.
 Моникёр может быть получен при выполнении операции [OpenSemanticLayer](OpenSemanticLayer.htm).


Результатом выполнения операции будут полученные настройки источников
 модели данных.


## Пример


Ниже приведён пример получения общего списка источников модели данных.
 В запросе передаётся моникёр для работы с источниками и пустая коллекция
 источников. В ответе возвращается список, содержащий ключи и наименования
 источников модели данных.


	 SOAP
	  JSON  C#


### SOAP-запрос:


		[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">


			[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">


				[![](../../minus.gif)](../../#)<GetSemanticLayerSources
				 xmlns="**http://www.fsight.ru/PP.SOM.Som**">


					  <mon xmlns="** **">LGKNEBJOALBDGOAEFGACCMDHGCIOGFIEGLGKDJFJGPOGPIHE!M!S!PNAAJNCJOALBDGOAEIJDIFGIHNEOBEMIEHIIKOKDEILMGLDPK!Sources</mon>


					[![](../../minus.gif)](../../#)<tArg xmlns="** **">


						[![](../../minus.gif)](../../#)<its>


							[![](../../minus.gif)](../../#)<it>


								  <k>-1</k>


							  <id />


							  <n />


							  </it>


						  </its>


					  </tArg>


				  </GetSemanticLayerSources>


			  </s:Body>


		  </s:Envelope>


### SOAP-ответ:


		[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">


			[![](../../minus.gif)](../../#)<soapenv:Body>


				[![](../../minus.gif)](../../#)<GetSemanticLayerSourcesResult
				 xmlns="**http://www.fsight.ru/PP.SOM.Som**"
				 xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**"
				 xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">


					[![](../../minus.gif)](../../#)<its xmlns="** **">


						[![](../../minus.gif)](../../#)<it>


							  <k>1</k>


							  <n>Repository</n>


						  </it>


					  </its>


				  </GetSemanticLayerSourcesResult>


			  </soapenv:Body>


		  </soapenv:Envelope>


### JSON-запрос:


{
 "GetSemanticLayerSources" :
  {
   "mon"
 : "LGKNEBJOALBDGOAEFGACCMDHGCIOGFIEGLGKDJFJGPOGPIHE!M!S!PNAAJNCJOALBDGOAEIJDIFGIHNEOBEMIEHIIKOKDEILMGLDPK!Sources",
   "tArg"
 :
    {
     "its"
 :
      {
       "it"
 :
        [
          {
           "k"
 : "-1",
           "id"
 : "",
           "n"
 : ""
          }
        ]
      }
    }
  }
}

### JSON-ответ:


{
 "GetSemanticLayerSourcesResult" :
  {
   "its"
 :
    {
     "it"
 :
      [
        {
         "k"
 : "1",
         "n"
 : "Repository"
        }
      ]
    }
  }
}


public static SemanticLayerSources GetSemanticLayerSources(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetSemanticLayerSources()
    {
        tArg = new SemanticLayerSources()
        {
            its = new SemanticLayerSource[]
            {
                new SemanticLayerSource()
                {
                    id = string.Empty,
                    n = string.Empty,
                    k = uint.MaxValue
                }
            }
        },
        // Моникёр открытого экземпляра модели данных
        mon = moniker + "!Sources"
    };
    // Получение информации об источниках модели данных
    var result = somClient.GetSemanticLayerSources(tGet);
    return result;
}


См. также:


[Работа
 с моделями данных](SemanticLayerOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
