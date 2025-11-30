# GetRawMd: Операция

GetRawMd: Операция
-


**


# GetRawMd


## Синтаксис


Rawmd GetRawMd(OdId tObject, RawMdPattern pattern)


## Параметры


tObject. Моникёр объекта репозитория.


pattern. Шаблон, в соответствии
 с которым будут извлекаться метаданные объекта.


## Описание


Операция GetRawMd получения
 метаданных объекта репозитория.


## Комментарии


Данная операция позволяет получить внутренние представления объектов
 в том виде, в каком они хранятся в системных таблицах репозитория. Для
 выполнения операции необходимо в поле tObject
 указать моникёр объекта репозитория, внутреннее представление которого
 необходимо получить. Моникёр может быть получен при выполнении операции
 [GetObjects](../Repository/GetObjects.htm).
 Для получения XML-представления объекта задайте в поле pattern.md
 значение true. Результатом выполнения
 операции будет внутреннее представление объекта.


Если работа осуществляется с объектом Документ, то файл, сохранённый
 в этот документ, можно получить в виде потока. Для этого задайте в поле
 pattern.mod значение true.
 Полученный в результате поток можно будет сохранить в файл или использовать
 по собственному усмотрению.


## Пример


Пример получения метаданных формы. В теле запроса передаётся моникёр
 экземпляра формы. В ответе приходит её внутреннее XML-представление.


[![](../../Opened.gif)![](../../Closed.gif)SOAP](javascript:TextPopup(this))


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetRawMd xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>S1!M!8736</id>  </tObject>
[![](../../minus.gif)](../../#)<pattern xmlns="****">
  <obInst>true</obInst>  <md>true</md>  </pattern>
  </GetRawMd>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetRawMdResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<md xmlns="****">
[![](../../minus.gif)](../../#)<R>
[![](../../minus.gif)](../../#)<L V="**0**">
  <OD />
  </L>
[![](../../minus.gif)](../../#)<O>
[![](../../minus.gif)](../../#)<F>
[![](../../minus.gif)](../../#)<T>
[![](../../minus.gif)](../../#)<T><![CDATA[Class OBJ8736Form: Form
	Button1: Button;

End Class OBJ8736Form;  ]]>  </T>[![](../../minus.gif)](../../#)<AT RE="**ExtCtrls;Forms**">
[![](../../minus.gif)](../../#)<RFC>
  <RF MOD="**ExtCtrls**" />
  <RF MOD="**Forms**" />
  </RFC>
  </AT>
  </T>
[![](../../minus.gif)](../../#)<W><![CDATA[PABNAE8ARABVAEwARQA+ADwARgBPAFIATQAgAEMATwBNAFAATwBOAEUATgBUAC4
AQwBMAFMASQBEAD0AIgB7AEEAQwBFADQANAA2AEEARQAtADcAMgBGADgALQA0ADk
ARQBEAC0AQgAxADQARQAtAEYAMQBEADkAMAA5ADAAQQA5ADMANAAzAH0AIgAgAF8
AVgBSAFMAPQAiADUAIgAgAF8ARgBTAFoAVgA9ACIANgAiAD4APABDAE8ATQBQAE8
ATgBFAE4AVAAuAFAAUgBPAFAAUwAgAFQARQBYAFQASwBFAFkAPQAiAEYAQQBMAFM
ARQAiACAASABJAE4AVABLAEUAWQA9ACIARgBBAEwAUwBFACIAIABCAEMARwBIAGU
AaQBnAGgAdAA9ACIAMwA6ADIANgAyACIAPgA8AF8AQwBNAFAAIABEADEAMAAxAD0
AIgBPAEIASgA4ADcAMwA2AEYAbwByAG0AIgAvAD4APABfAEMAVABSACAARAAyADA
AMwA9ACIALQAxACIAIABEAC0ANQAxADgAPQAiACQEPgRABDwEMAQiACAARAAyADE
AMgA9ACIAMQA4ADQANgAxADUAIgAgAEQAMgAxADYAPQAiADQANwA4ADYANgA3ACI
AIABEADIANQA3AD0AIgAtADEAIgAgAEQAMgAxADgAPQAiADEAOQA3ADUAMwA4ACI
AIABEADIAMgAwAD0AIgAyADYANgA2ADYANwAiACAARAAyADUAOAA9ACIALQAxACI
AIABEADIANQA5AD0AIgAtADEAIgA+ADwARAAyADAANAAgAEQAMQAwADAAPQAiADA
AIgAgAEQAMQAwADIAPQAiADAAIgAgAEQAMQAwADEAPQAiADAAIgAgAEQAMQAwADM
APQAiADAAIgAvAD4APABEADIAMQAwACAARAAxADAANwA9ACIALQAxACIALwA+ADw
ALwBfAEMAVABSAD4APABfAEYAUgBNACAARAAyADAANgA9ACIAMQA2ADEAMgAzADE
AIgAgAEQAMgAwADcAPQAiADIANQA2ADAAMAAwACIAIABEADMANgAwAD0AIgAwACI
AIABEADMANAAwAD0AIgAwACIAPgA8AEQAMwAwADcAIABEADEAMAA0AD0AIgAyACI
ALwA+ADwALwBfAEYAUgBNAD4APAAvAEMATwBNAFAATwBOAEUATgBUAC4AUABSAE8
AUABTAD4APABDAE8ATQBQAE8ATgBFAE4AVAAuAEUAVgBFAE4AVABTAC8APgA8AEM
ATwBNAFAATwBOAEUATgBUAC4AQwBPAE4AVABSAE8ATABTAD4APABCAHUAdAB0AG8
AbgAxACAAQwBPAE0AUABPAE4ARQBOAFQALgBDAEwAUwBJAEQAPQAiAHsAQQBDAEU
ANAA0ADYAQQAzAC0ANwAyAEYAOAAtADQAOQBFAEQALQBCADEANABFAC0ARgAxAEQ
AOQAwADkAMABBADkAMwA0ADMAfQAiACAAXwBWAFIAUwA9ACIANQAiAD4APABDAE8
ATQBQAE8ATgBFAE4AVAAuAFAAUgBPAFAAUwAgAFQARQBYAFQASwBFAFkAPQAiAEY
AQQBMAFMARQAiACAASABJAE4AVABLAEUAWQA9ACIARgBBAEwAUwBFACIAPgA8AF8
AQwBNAFAAIABEADEAMAAxAD0AIgBCAHUAdAB0AG8AbgAxACIALwA+ADwAXwBDAFQ
AUgAgAEQAMgAwADMAPQAiADAAIgAgAEQALQA1ADEAOAA9ACIAQgB1AHQAdABvAG4
AMQAiACAARAAyADEAMgA9ACIAMQA0ADEANQA0ACIAIABEADIAMQA2AD0AIgAxADA
ANgA2ADYANwAiACAARAAyADUANwA9ACIALQAxACIAIABEADIAMQA4AD0AIgA2ADg
AMwAwADgAIgAgAEQAMgAyADAAPQAiADUAMAAwADAAMAAiACAARAAyADUAOAA9ACI
ALQAxACIAIABEADIANQA5AD0AIgAtADEAIgA+ADwARAAyADAANAAgAEQAMQAwADA
APQAiADAAIgAgAEQAMQAwADIAPQAiADAAIgAgAEQAMQAwADEAPQAiADAAIgAgAEQ
AMQAwADMAPQAiADAAIgAvAD4APABEADIAMQAwACAARAAxADAANwA9ACIALQAxACI
ALwA+ADwALwBfAEMAVABSAD4APABfAEMAUwBCAC8APgA8AC8AQwBPAE0AUABPAE4
ARQBOAFQALgBQAFIATwBQAFMAPgA8AEMATwBNAFAATwBOAEUATgBUAC4ARQBWAEU
ATgBUAFMALwA+ADwAQwBPAE0AUABPAE4ARQBOAFQALgBDAE8ATgBUAFIATwBMAFM
ALwA+ADwALwBCAHUAdAB0AG8AbgAxAD4APAAvAEMATwBNAFAATwBOAEUATgBUAC4
AQwBPAE4AVABSAE8ATABTAD4APAAvAEYATwBSAE0APgA8AC8ATQBPAEQAVQBMAEU
APgANAAoA  ]]>  </W>  </F>
  </O>
  </R>
  </md>
  </GetRawMdResult>
  </soapenv:Body>
  </soapenv:Envelope>


[![](../../Opened.gif)![](../../Closed.gif)JSON](javascript:TextPopup(this))


### JSON-запрос:


{
 "GetRawMd" :
  {
   "tObject" :
    {
     "id" : "S1!M!8736"
    },
   "pattern" :
    {
     "obInst" : "true",
     "md" : "true"
    }
  }
}

### JSON-ответ:


{
 "GetRawMdResult" :
  {
   "md" :
    {
     "R" :
      {
       "L" :
        {
         "@V" : "0",
         "OD" : ""
        },
       "O" :
        {
         "F" :
          {
           "T" :
            {
             "T" : "",
             "AT" :
              {
               "@RE" : "ExtCtrls;Forms",
               "RFC" :
                {
                 "RF" :
                  [
                    {
                     "@MOD" : "ExtCtrls"
                    },
                    {
                     "@MOD" : "Forms"
                    }
                  ]
                }
              }
            },
           "W" :
            {
             "@P4STMFMT" : "BASE64"
            }
          }
        }
      }
    }
  }
}


[![](../../Opened.gif)![](../../Closed.gif)C#](javascript:TextPopup(this))


public static RawMd GetDocumentMetadata(MbId mb, string objectId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetRawMd()
    {
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, objectId).k },
        pattern = new RawMdPattern()
        {
            md = true,
        }
    };
    //Получение метаданных
    var result = somClient.GetRawMd(tGet);
    return result;
}


См. также:


[Работа с
 метаданными объектов](Raw_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
