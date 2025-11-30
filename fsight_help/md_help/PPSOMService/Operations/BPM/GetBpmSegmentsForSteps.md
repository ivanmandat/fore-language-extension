# GetBpmSegmentsForSteps: Операция

GetBpmSegmentsForSteps: Операция
-


**


# GetBpmSegmentsForSteps


## Синтаксис


BpmSegmentsForStepsResult GetBpmSegmentsForSteps(BpmProcessId
 tBpmProcess, BpmSegmentsForStepsArg tArg)


## Параметры


tBpmProcess. Моникёр
 открытого процесса.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetBpmSegmentsForSteps
 получает информацию о сегментах, которые могут использоваться в шаге.


## Комментарии


Операция актуальна для шагов «Ввода
 данных» или «Согласование».


Для выполнения операции укажите в поле tBpmProcess
 моникёр открытого процесса, а в поле tArg
 информацию о шаге, для которого выполняется операция. Моникёр может быть
 получен при выполнении операции [OpenBpmProcess](OpenBpmProcess.htm).
 Информацию о шаге можно получить, используя операцию [GetBpmWorkspace](GetBpmWorkspace.htm).


Результатом выполнения операции будет список источников данных прикрепленной
 формы ввода с сегментами данных, которые могут быть прикреплены к шагу
 процесса.


## Пример


Ниже приведён пример получения информации о сегментах, которые могут
 применяться для шага. В запросе передаётся моникёр открытого процесса,
 GUID шага ввода данных и ключ формы ввода, на работу с которой настроен
 шаг. В ответе возвращается информация о сегментах кубов, которые используются
 в форме ввода.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetBpmSegmentsForSteps xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tBpmProcess xmlns="****">
  <id>MMCCFMODHHDDGOAEJNHEBIDDFKDDHAGEOJJCCJMGOADNDDCJ!M!S!BPFLPMKNODHHDDGOAEAPBGMNOKNLEGJMHEHJPIBDFCLCKGHBEP</id>  </tBpmProcess>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <key>343818</key>  <isFullTree>true</isFullTree>  <stpGuid>{42F4DDBC-DC40-46E3-83F6-202E13E4EF37}</stpGuid>  </tArg>
  </GetBpmSegmentsForSteps>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetBpmSegmentsForStepsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<res xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <cubesName>Куб</cubesName>  <type>0</type>  <cubeKey>343811</cubeKey>[![](../../minus.gif)](../../#)<segs>
[![](../../minus.gif)](../../#)<it>
  <key>343832</key>  <linked>1</linked>  <name>Доступ по секторам</name>  </it>
[![](../../minus.gif)](../../#)<it>
  <key>343834</key>  <linked>1</linked>  <name>Доступ по фирмам</name>  </it>
  </segs>
  </it>
  </res>
[![](../../minus.gif)](../../#)<paramsData xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <dimKey>343805</dimKey>  </it>
  </paramsData>
  </GetBpmSegmentsForStepsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetBpmSegmentsForSteps" :
  {
   "tBpmProcess" :
    {
     "id" : "MMCCFMODHHDDGOAEJNHEBIDDFKDDHAGEOJJCCJMGOADNDDCJ!M!S!BPFLPMKNODHHDDGOAEAPBGMNOKNLEGJMHEHJPIBDFCLCKGHBEP"
    },
   "tArg" :
    {
     "key" : "343818",
     "isFullTree" : "true",
     "stpGuid" : "{42F4DDBC-DC40-46E3-83F6-202E13E4EF37}"
    }
  }
}

### JSON-ответ:


{
 "GetBpmSegmentsForStepsResult" :
  {
   "res" :
    {
     "it" :
      {
       "cubesName" : "Куб",
       "type" : "0",
       "cubeKey" : "343811",
       "segs" :
        {
         "it" :
          [
            {
             "key" : "343832",
             "linked" : "1",
             "name" : "Доступ по секторам"
            },
            {
             "key" : "343834",
             "linked" : "1",
             "name" : "Доступ по фирмам"
            }
          ]
        }
      }
    },
   "paramsData" :
    {
     "it" :
      {
       "dimKey" : "343805"
      }
    }
  }
}


public static BpmSegmentsForStepsResult GetBpmSegmentsForSteps(string moniker, string stepGUID, uint frmKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetBpmSegmentsForSteps()
    {
        // Формирование моникёра объекта
        tBpmProcess = new BpmProcessId() { id = moniker },
        tArg = new BpmSegmentsForStepsArg()
        {
            isFullTree = true,
            stpGuid = stepGUID,
            key = frmKey
        }
    };
    // Получение настроек сегментов, которые могут использоваться в шаге
    var result = somClient.GetBpmSegmentsForSteps(tGet);
    return result;
}


См. также:


[Работа с
 процессами](BPM_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
