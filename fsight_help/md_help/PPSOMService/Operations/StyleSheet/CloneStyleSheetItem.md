# CloneStyleSheetItem: Операция

CloneStyleSheetItem: Операция
-


**


# CloneStyleSheetItem


## Синтаксис


StyleSheetItemMetadata CloneStyleSheetItem(string
 mon)


## Параметры


mon. Моникёр
 отдельного стиля в таблице стилей.


## Описание


Операция CloneStyleSheetItem
 создаёт клон стиля в таблице стилей.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра таблицы стилей с постфиксом «!<номер
 стиля>». Моникёр может быть получен при выполнении операции
 [OpenStyleSheet](OpenStyleSheet.htm).


Результатом операции будут метаданные созданного клона стиля.


## Пример


Ниже приведён пример создания клона стиля в таблице стилей. В запросе
 передаётся моникёр стиля. В ответе возвращается информация о созданном
 клоне.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CloneStyleSheetItem xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">CPDKLBGLHHOOFOAEEOBMIPONHEFJBEBEOLJEMAEIDCPLAAGC!M!S!SDJNKBJGLHHOOFOAENACKGIKGBKMHOKOEOJBIKCBEOKJJAPGE!2</mon>  </CloneStyleSheetItem>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<CloneStyleSheetItemResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<h xmlns="****">
  <key>3</key>  <tag>TAB</tag>  <name>Стиль1 (копия 1)</name>  <id>I3</id>  </h>
[![](../../minus.gif)](../../#)<style UNS="**2**">
  <Text HA="**-1**" VA="**-1**" WW="**-1**" Mmm="**-1.00 -1.00 -1.00 -1.00**" />
  <Font F="**Arial**" S="**12**" I="**true**" H="**18**" />
  <Borders />
  <Hyperlink />
  <ContainerInfo key="**3**" sheetType="**0**" />
  </style>
  </CloneStyleSheetItemResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CloneStyleSheetItem" :
  {
   "mon" : "CPDKLBGLHHOOFOAEEOBMIPONHEFJBEBEOLJEMAEIDCPLAAGC!M!S!SDJNKBJGLHHOOFOAENACKGIKGBKMHOKOEOJBIKCBEOKJJAPGE!2"
  }
}

### JSON-ответ:


{
 "CloneStyleSheetItemResult" :
  {
   "h" :
    {
     "key" : "3",
     "tag" : "TAB",
     "name" : "Стиль1 (копия 1)",
     "id" : "I3"
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
       "@key" : "3",
       "@sheetType" : "0"
      }
    }
  }
}


public static StyleSheetItemMetadata CloneStyleSheetItem(string moniker, ulong styleNumber)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tClone = new CloneStyleSheetItem()
    {
        mon = moniker + '!' + styleNumber
    };
    // Создании клона стиля
    var result = somClient.CloneStyleSheetItem(tClone);
    return result;
}


См. также:


[Работа
 с таблицей стилей](StyleSheet_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
