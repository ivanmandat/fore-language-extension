# SetBpmSegmentsInfo: Операция

SetBpmSegmentsInfo: Операция
-


**


# SetBpmSegmentsInfo


## Синтаксис


BpmSetSegmentsInfoResult SetBpmSegmentsInfo(BpmProcessId
 tBpmProcess, SetBpmCubeSegmentsInfoArg tArg)


## Параметры


tBpmProcess. Моникёр
 открытого процесса.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetBpmSegmentsInfo
 изменяет настройки сегментов данных у шага процесса.


## Комментарии


Операция актуальна для шагов «Ввода
 данных» или «Согласование».


Для выполнения операции укажите в поле tBpmProcess
 моникёр открытого процесса, а в поле tArg
 шаг и настройки сегментов данных, которое необходимо применить. Моникёр
 может быть получен при выполнении операции [OpenBpmProcess](OpenBpmProcess.htm).


Информацию о шаге и сегментах можно получить, используя операцию [GetBpmSegmentsForSteps](GetBpmSegmentsForSteps.htm).


Результатом операции будет информация об успешном изменении настроек
 сегментов данных.


## Пример


Ниже приведён пример изменения настроек сегментов в шаге процесса. В
 запросе передаётся моникёр открытого процесса, GUID шага ввода данных
 и настройки сегментов. В ответе возвращается признак успешного изменения
 настроек.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetBpmSegmentsInfo xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tBpmProcess xmlns="****">
  <id>MMCCFMODHHDDGOAEJNHEBIDDFKDDHAGEOJJCCJMGOADNDDCJ!M!S!BPFLPMKNODHHDDGOAEAPBGMNOKNLEGJMHEHJPIBDFCLCKGHBEP</id>  </tBpmProcess>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <stpGuid>{42F4DDBC-DC40-46E3-83F6-202E13E4EF37}</stpGuid>[![](../../minus.gif)](../../#)<segsInfo>
[![](../../minus.gif)](../../#)<it>
  <isDynamic>true</isDynamic>  <linked>true</linked>  <key>343832</key>  <cubeKey>343811</cubeKey>  <name>Доступ по секторам</name>  </it>
[![](../../minus.gif)](../../#)<it>
  <isDynamic>false</isDynamic>  <linked>true</linked>  <key>343834</key>  <cubeKey>343811</cubeKey>  <name>Доступ по фирмам</name>  </it>
  </segsInfo>
  </tArg>
  </SetBpmSegmentsInfo>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetBpmSegmentsInfoResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****">1</result>  </SetBpmSegmentsInfoResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetBpmSegmentsInfo" :
  {
   "tBpmProcess" :
    {
     "id" : "MMCCFMODHHDDGOAEJNHEBIDDFKDDHAGEOJJCCJMGOADNDDCJ!M!S!BPFLPMKNODHHDDGOAEAPBGMNOKNLEGJMHEHJPIBDFCLCKGHBEP"
    },
   "tArg" :
    {
     "stpGuid" : "{42F4DDBC-DC40-46E3-83F6-202E13E4EF37}",
     "segsInfo" :
      {
       "it" :
        [
          {
           "isDynamic" : "true",
           "linked" : "true",
           "key" : "343832",
           "cubeKey" : "343811",
           "name" : "Доступ по секторам"
          },
          {
           "isDynamic" : "false",
           "linked" : "true",
           "key" : "343834",
           "cubeKey" : "343811",
           "name" : "Доступ по фирмам"
          }
        ]
      }
    }
  }
}

### JSON-ответ:


{
 "SetBpmSegmentsInfoResult" :
  {
   "result" : "1"
  }
}


public static BpmSetSegmentsInfoResult SetBpmSegmentsInfo(string moniker, string stepGUID, BpmCubeSegmentInfo[] newSegsInfo)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetBpmSegmentsInfo()
    {
        // Формирование моникёра объекта
        tBpmProcess = new BpmProcessId() { id = moniker },
        tArg = new SetBpmCubeSegmentsInfoArg()
        {
            stpGuid = stepGUID,
            segsInfo = newSegsInfo
        }
    };
    // Изменение настроек сегмента данных
    var result = somClient.SetBpmSegmentsInfo(tSet);
    return result;
}


См. также:


[Работа с
 процессами](BPM_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
