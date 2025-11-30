# SetSemanticLayerSources: Операция

SetSemanticLayerSources: Операция
-


**


# SetSemanticLayerSources


## Синтаксис


bool SetSemanticLayerSources(string mon, SemanticLayerSources
 tArg)


## Параметры


mon. Моникёр
 для работы с источниками модели данных.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetSemanticLayerSources
 изменяет настройки источников модели данных.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра модели данных с постфиксом !Sources,
 а в поле tArg обновлённые настройки
 источников. Моникёр может быть получен при выполнении операции [OpenSemanticLayer](OpenSemanticLayer.htm).


Результатом выполнения операции будет логическое значение true,
 если изменение настроек завершилось успешно.


## Пример


Ниже приведён пример изменения наименования источника в модели данных.
 В запросе передаётся моникёр для работы с источниками, ключ и новое наименование
 источника. В ответе возвращается признак успешного применения изменений.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetSemanticLayerSources xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">LGKNEBJOALBDGOAEFGACCMDHGCIOGFIEGLGKDJFJGPOGPIHE!M!S!PNAAJNCJOALBDGOAEIJDIFGIHNEOBEMIEHIIKOKDEILMGLDPK!Sources</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <n>Подключение к DBServer</n>  </it>
  </its>
  </tArg>
  </SetSemanticLayerSources>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetSemanticLayerSourcesResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetSemanticLayerSourcesResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetSemanticLayerSources" :
  {
   "mon" : "LGKNEBJOALBDGOAEFGACCMDHGCIOGFIEGLGKDJFJGPOGPIHE!M!S!PNAAJNCJOALBDGOAEIJDIFGIHNEOBEMIEHIIKOKDEILMGLDPK!Sources",
   "tArg" :
    {
     "its" :
      {
       "it" :
        [
          {
           "k" : "1",
           "n" : "Подключение к DBServer"
          }
        ]
      }
    }
  }
}

### JSON-ответ:


{
 "SetSemanticLayerSourcesResult" : "1"
}


public static bool SetSemanticLayerSources(string moniker, SemanticLayerSource setSource)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetSemanticLayerSources()
    {
        tArg = new SemanticLayerSources()
        {
            its = new SemanticLayerSource[]
            {
                setSource
            }
        },
        // Моникёр открытого экземпляра модели данных
        mon = moniker + "!Sources"
    };
    // Изменение информации об источнике модели данных
    var result = somClient.SetSemanticLayerSources(tSet);
    return result;
}


См. также:


[Работа
 с моделями данных](SemanticLayerOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
