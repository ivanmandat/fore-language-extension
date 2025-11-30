# GetControlInfo: Операция

GetControlInfo: Операция
-


**


# GetControlInfo


## Синтаксис


ControlInfoEx GetControlInfo(string mon)


## Параметры


mon. Моникёр
 для работы с настройками управления параметрами объекта.


## Описание


Операция GetControlInfo получает
 настройки управления параметрами вложенных объектов.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра объекта с постфиксом «!Params!CtlInfo».
 Моникёр может быть получен при выполнении операции с префиксом Open* в
 соответствии с типом объекта.


Результатом выполнения операции будет коллекция элементов с информацией
 об управлении параметрами вложенных объектов.


## Пример


Ниже приведён пример получения настроек управления параметрами вложенных
 объектов в регламентном отчёте. В запросе передаётся моникёр экземпляра
 регламентного отчёта. В ответе возвращаются полученные настройки.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetControlInfo xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">MJGJPMLCOOJPFOAEIHPBNIFBHFLBMOHEEKEJHIHCJICHMNBF!M!S!PEFGDCCMCOOJPFOAEAMDIPOAEKOCCCDKEMJPIBDDOBOHPHKBH!Params!CtlInfo</mon>  </GetControlInfo>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetControlInfoResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<controls xmlns="****">
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<controlledObject>
  <n>Срез 1</n>  <k>1</k>  <c>2049</c>  </controlledObject>
[![](../../minus.gif)](../../#)<controlParams>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<controlledParam>
  <id>DATE</id>  <name>Дата</name>  <key>1</key>  <dataType>4</dataType>  </controlledParam>
  <expression>{@ITEM}</expression>  </it>
  </controlParams>
  </it>
  </controls>
  </GetControlInfoResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetControlInfo" :
  {
   "mon" : "MJGJPMLCOOJPFOAEIHPBNIFBHFLBMOHEEKEJHIHCJICHMNBF!M!S!PEFGDCCMCOOJPFOAEAMDIPOAEKOCCCDKEMJPIBDDOBOHPHKBH!Params!CtlInfo"
  }
}

### JSON-ответ:


{
 "GetControlInfoResult" :
  {
   "controls" :
    {
     "it" :
      {
       "controlledObject" :
        {
         "n" : "Срез 1",
         "k" : "1",
         "c" : "2049"
        },
       "controlParams" :
        {
         "it" :
          {
           "controlledParam" :
            {
             "id" : "DATE",
             "name" : "Дата",
             "key" : "1",
             "dataType" : "4"
            },
           "expression" : "{@ITEM}"
          }
        }
      }
    }
  }
}


public static ControlInfoEx GetControlInfo(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetControlInfo()
    {
        mon = moniker + "!Params!CtlInfo"
    };
    // Получение настроек управления параметрами вложенных объектов
    var result = somClient.GetControlInfo(tGet);
    return result;
}


См. также:


[Работа
 с репозиторием](Repository_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
