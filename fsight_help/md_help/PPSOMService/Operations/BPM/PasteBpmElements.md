# PasteBpmElements: Операция

PasteBpmElements: Операция
-


**


# PasteBpmElements


## Синтаксис


PasteBpmElementsResult PasteBpmElements(BpmProcessId
 tBpmProcess, PasteBpmElementsArg tArg)


## Параметры


tBpmProcess. Моникёр
 открытого процесса.


tArg. Параметры выполнения
 операции.


## Описание


Операция PasteBpmElements вставляет
 скопированные элементы процесса.


## Комментарии


Для выполнения операции укажите в поле tBpmProcess
 моникёр открытого процесса, в поле tArg.pasteAfterGuid
 GUID элемента, после которого осуществляется вставка скопированных элементов.
 Моникёр может быть получен при выполнении операции [OpenBpmProcess](OpenBpmProcess.htm).
 Вставка осуществляется из специального буфера, который формируется при
 выполнении операции [CopyBpmElements](CopyBpmElements.htm).


Результатом выполнения операции будет информация о вставленных элементах
 процесса.


## Пример


Ниже приведён пример вставки скопированного этапа процесса. В запросе
 передаётся моникёр открытого процесса и GUID этапа, после которого вставляется
 скопированный этап. В ответе возвращаются GUID'ы нового вставленного этапа
 и его шагов.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<PasteBpmElements xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tBpmProcess xmlns="****">
  <id>KCHABFCBDFJFGOAELPKPBKMKIBIKDJHEFJONMMECLKLENNNJ!M!S!BPNGCBIPCBDFJFGOAELOCFACOLAGMIODCEKIOLGAPMGDNOCEBA</id>  </tBpmProcess>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <pasteAfterGuid>{103D9D40-1C9F-4184-990E-7DB11E5C561A}</pasteAfterGuid>  </tArg>
  </PasteBpmElements>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<PasteBpmElementsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<stages xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <guid>{3FED5D0F-5203-49A0-9FD0-1C52AC025D1D}</guid>[![](../../minus.gif)](../../#)<stGroups>
[![](../../minus.gif)](../../#)<it>
  <guid>{EABD387D-2D96-4DB4-973D-4C6F4CCD3370}</guid>[![](../../minus.gif)](../../#)<steps>
  <it>{12921D87-2242-428C-8AF8-5B865E806EF7}</it>  <it>{F9814460-F8DF-4E59-8E31-AFD192A23449}</it>  </steps>
  </it>
  </stGroups>
  </it>
  </stages>
  </PasteBpmElementsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "PasteBpmElements" :
  {
   "tBpmProcess" :
    {
     "id" : "KCHABFCBDFJFGOAELPKPBKMKIBIKDJHEFJONMMECLKLENNNJ!M!S!BPNGCBIPCBDFJFGOAELOCFACOLAGMIODCEKIOLGAPMGDNOCEBA"
    },
   "tArg" :
    {
     "pasteAfterGuid" : "{103D9D40-1C9F-4184-990E-7DB11E5C561A}"
    }
  }
}

### JSON-ответ:


{
 "PasteBpmElementsResult" :
  {
   "stages" :
    {
     "it" :
      {
       "guid" : "{3FED5D0F-5203-49A0-9FD0-1C52AC025D1D}",
       "stGroups" :
        {
         "it" :
          {
           "guid" : "{EABD387D-2D96-4DB4-973D-4C6F4CCD3370}",
           "steps" :
            {
             "it" :
              [
                "{12921D87-2242-428C-8AF8-5B865E806EF7}",
                "{F9814460-F8DF-4E59-8E31-AFD192A23449}"
              ]
            }
          }
        }
      }
    }
  }
}


public static PasteBpmElementsResult PasteBpmElements(string moniker, string elGUIDDestination)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tPaste = new PasteBpmElements()
    {
        tArg = new PasteBpmElementsArg()
        {
            pasteAfterGuid = elGUIDDestination
        },
        // Формирование моникёра объекта
        tBpmProcess = new BpmProcessId() { id = moniker },
    };
    // Вставка скопированного элемента процесса
    var result = somClient.PasteBpmElements(tPaste);
    return result;
}


См. также:


[Работа с
 процессами](BPM_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
