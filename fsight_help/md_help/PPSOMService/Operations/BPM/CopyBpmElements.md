# CopyBpmElements: Операция

CopyBpmElements: Операция
-


**


# CopyBpmElements


## Синтаксис


bool CopyBpmElements(BpmProcessId tBpmProcess, BpmElementsArg
 tArg)


## Параметры


tBpmProcess. Моникёр
 открытого процесса.


tArg. Параметры выполнения
 операции.


## Описание


Операция CopyBpmElements копирует
 элементы процесса.


## Комментарии


Для выполнения операции укажите в поле tBpmProcess
 моникёр открытого процесса, в поле tArg
 параметры копирования элементов. Моникёр может быть получен при выполнении
 операции [OpenBpmProcess](OpenBpmProcess.htm). Информация о
 скопированных элементах сохраняется в специальном буфере. При копировании
 этапов также копируются его дочерние шаги, шлюзы. Для вставки элементов
 используйте операцию [PasteBpmElements](PasteBpmElements.htm).


Результатом выполнения операции будет логическое значение true,
 если копирование завершилось успешно.


## Пример


Ниже приведён пример копирования этапа вместе с шагами. В запросе передаётся
 моникёр открытого процесса и GUID копируемого этапа. В ответе возвращается
 признак успешного копирования.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CopyBpmElements xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tBpmProcess xmlns="****">
  <id>KCHABFCBDFJFGOAELPKPBKMKIBIKDJHEFJONMMECLKLENNNJ!M!S!BPNGCBIPCBDFJFGOAELOCFACOLAGMIODCEKIOLGAPMGDNOCEBA</id>  </tBpmProcess>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <elType>Stage</elType>[![](../../minus.gif)](../../#)<elGuids>
  <it>{103D9D40-1C9F-4184-990E-7DB11E5C561A}</it>  </elGuids>
  </tArg>
  </CopyBpmElements>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <CopyBpmElementsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</CopyBpmElementsResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CopyBpmElements" :
  {
   "tBpmProcess" :
    {
     "id" : "KCHABFCBDFJFGOAELPKPBKMKIBIKDJHEFJONMMECLKLENNNJ!M!S!BPNGCBIPCBDFJFGOAELOCFACOLAGMIODCEKIOLGAPMGDNOCEBA"
    },
   "tArg" :
    {
     "elType" : "Stage",
     "elGuids" :
      {
       "it" : "{103D9D40-1C9F-4184-990E-7DB11E5C561A}"
      }
    }
  }
}

### JSON-ответ:


{
 "CopyBpmElementsResult" : "1"
}


public static bool CopyBpmElements(string moniker, string elGUIDSource)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tCopy = new CopyBpmElements()
    {
        tArg = new BpmElementsArg()
        {
            elGuids = new string[1] { elGUIDSource },
            elType = BpmElementType.Stage
        },
        // Формирование моникёра объекта
        tBpmProcess = new BpmProcessId() { id = moniker },
    };
    // Копирование элемента процесса
    var result = somClient.CopyBpmElements(tCopy);
    return result;
}


См. также:


[Работа с
 процессами](BPM_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
