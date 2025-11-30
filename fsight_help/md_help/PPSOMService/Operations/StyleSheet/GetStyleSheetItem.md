# GetStyleSheetItem: Операция

GetStyleSheetItem: Операция
-


**


# GetStyleSheetItem


## Синтаксис


StyleSheetItemMetadata GetStyleSheetItem(string
 mon)


## Параметры


mon. Моникёр
 отдельного стиля в таблице стилей.


## Описание


Операция GetStyleSheetItem получает
 информацию об отдельном стиле таблицы стилей.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра таблицы стилей с постфиксом «!<номер
 стиля>». Моникёр может быть получен при выполнении операции
 [OpenStyleSheet](OpenStyleSheet.htm).


Результатом операции будут метаданные указанного стиля из таблицы стилей.


## Пример


Ниже приведён пример получения информации о стиле в таблице стилей.
 В запросе передаётся моникёр стиля. В ответе возвращается информация и
 настройки стиля.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetStyleSheetItem xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">CPDKLBGLHHOOFOAEEOBMIPONHEFJBEBEOLJEMAEIDCPLAAGC!M!S!SDJNKBJGLHHOOFOAENACKGIKGBKMHOKOEOJBIKCBEOKJJAPGE!2</mon>  </GetStyleSheetItem>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetStyleSheetItemResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<h xmlns="****">
  <key>2</key>  <tag>TAB</tag>  <name>Стиль1</name>  <id>I2</id>  </h>
[![](../../minus.gif)](../../#)<style UNS="**2**">
  <Text HA="**-1**" VA="**-1**" WW="**-1**" Mmm="**-1.00 -1.00 -1.00 -1.00**" />
  <Font F="**Arial**" S="**12**" I="**true**" H="**18**" />
  <Borders />
  <Hyperlink />
  <ContainerInfo key="**2**" sheetType="**0**" />
  </style>
  </GetStyleSheetItemResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetStyleSheetItem" :
  {
   "mon" : "CPDKLBGLHHOOFOAEEOBMIPONHEFJBEBEOLJEMAEIDCPLAAGC!M!S!SDJNKBJGLHHOOFOAENACKGIKGBKMHOKOEOJBIKCBEOKJJAPGE!2"
  }
}

### JSON-ответ:


{
 "GetStyleSheetItemResult" :
  {
   "h" :
    {
     "key" : "2",
     "tag" : "TAB",
     "name" : "Стиль1",
     "id" : "I2"
    },
   "style" :
    {
     "@UNS" : "2",
     "Text" :
      {
       "@VA" : "-1",
       "@Mmm" : "-1.00 -1.00 -1.00 -1.00",
       "@HA" : "-1",
       "@WW" : "-1"
      },
     "Font" :
      {
       "@S" : "12",
       "@F" : "Arial",
       "@H" : "18",
       "@I" : "true"
      },
     "Borders" : "",
     "Hyperlink" : "",
     "ContainerInfo" :
      {
       "@key" : "2",
       "@sheetType" : "0"
      }
    }
  }
}


public static StyleSheetItemMetadata GetStyleSheetItem(string moniker, ulong styleNumber)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetStyleSheetItem()
    {
        mon = moniker + '!' + styleNumber
    };
    // Получение информации о стиле в таблице стилей
    var result = somClient.GetStyleSheetItem(tGet);
    return result;
}


См. также:


[Работа
 с таблицей стилей](StyleSheet_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
