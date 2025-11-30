# SetStartEventSettings: Операция

SetStartEventSettings: Операция
-


**


# SetStartEventSettings


## Синтаксис


Result SetStartEventSettings(BpmProcessId tBpmProcess,
 BpmStartEventInfo tArg)


## Параметры


tBpmProcess. Моникёр
 открытого процесса.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetStartEventSettings
 изменяет настройки стартового события процесса.


## Комментарии


Для выполнения операции укажите в поле tBpmProcess
 моникёр открытого процесса, а в поле tArg
 устанавливаемые настройки. В зависимости от значения поля tArg.optType
 задаются разные группы полей. Моникёр может быть получен при выполнении
 операции [OpenBpmProcess](OpenBpmProcess.htm).


Результатом выполнения операции будет признак успешного задания настроек
 стартового события.


## Пример


Ниже приведён пример изменения настроек стартового события процесса.
 В запросе передаётся моникёр открытого процесса и устанавливаемые настройки.
 В ответе возвращается признак успешного изменения настроек.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetStartEventSettings xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tBpmProcess xmlns="****">
  <id>DICNGBKNAJKEGOAEPFPJHGAAEMHJPFIEHLGHCIACBBLCJJKA!M!S!BPAHEICDKNAJKEGOAECMEPDJAJDGAPEBCELJDMNJMLEPENHPHE</id>  </tBpmProcess>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <optType>0</optType>[![](../../minus.gif)](../../#)<per>
  <type>Monthly</type>[![](../../minus.gif)](../../#)<mPer>
[![](../../minus.gif)](../../#)<ms>
  <it>1</it>  <it>2</it>  <it>3</it>  <it>4</it>  <it>5</it>  <it>6</it>  </ms>
[![](../../minus.gif)](../../#)<dM>
  <d>15</d>  </dM>
  </mPer>
  </per>
  <rep>6</rep>  </tArg>
  </SetStartEventSettings>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetStartEventSettingsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetStartEventSettingsResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetStartEventSettings" :
  {
   "tBpmProcess" :
    {
     "id" : "DICNGBKNAJKEGOAEPFPJHGAAEMHJPFIEHLGHCIACBBLCJJKA!M!S!BPAHEICDKNAJKEGOAECMEPDJAJDGAPEBCELJDMNJMLEPENHPHE"
    },
   "tArg" :
    {
     "optType" : "0",
     "per" :
      {
       "type" : "Monthly",
       "mPer" :
        {
         "ms" :
          {
           "it" :
            [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6"
            ]
          },
         "dM" :
          {
           "d" : "15"
          }
        }
      },
     "rep" : "6"
    }
  }
}

### JSON-ответ:


{
 "SetStartEventSettingsResult" : "1"
}


public static bool SetStartEventSettings(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetStartEventSettings()
    {
        // Формирование моникёра объекта
        tBpmProcess = new BpmProcessId() { id = moniker },
        tArg = new BpmStartEventInfo()
        {
            optType = 0,
            per = new BpmPeriodInfo()
            {
                type = BpmSchTaskPeriodType.Monthly,
                mPer = new BpmSchTaskPeriodMonthly()
                {
                    dM = new BpmSchTaskPeriodMonthlyModDay()
                    {
                        d = 15
                    },
                    ms = new int[6] { 1, 2, 3, 4, 5, 6 }
                }
            },
            rep = 6
        }
    };
    // Задание настроек стартового события
    var result = somClient.SetStartEventSettings(tSet);
    return result;
}


См. также:


[Работа с
 процессами](BPM_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
