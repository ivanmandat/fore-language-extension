# CreateStyleSheetItem: Операция

CreateStyleSheetItem: Операция
-


**


# CreateStyleSheetItem


## Синтаксис


StyleSheetItemMetadata CreateStyleSheetItem(StyleSheetId
 tStyleSheet)


## Параметры


tStyleSheet. Моникёр
 открытого экземпляра таблицы стилей.


## Описание


Операция CreateStyleSheetItem
 создаёт стиль в таблице стилей.


## Комментарии


Для выполнения операции укажите в поле tStyleSheet
 моникёр открытого экземпляра таблицы стилей. Моникёр может быть получен
 при выполнении операции [OpenStyleSheet](OpenStyleSheet.htm).


Результатом выполнения операции будут метаданные созданного стиля.


Дальнейшая работа с отдельным стилем осуществляется с помощью операций
 [GetStyleSheetItem](GetStyleSheetItem.htm)/[SetStyleSheetItem](SetStyleSheetItem.htm).


## Пример


Ниже приведён пример создания стиля в таблице стилей. В запросе передаётся
 моникёр открытого экземпляра таблицы стилей. В ответе возвращается информация
 о созданном стиле.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CreateStyleSheetItem xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tStyleSheet xmlns="****">
  <id>CPDKLBGLHHOOFOAEEOBMIPONHEFJBEBEOLJEMAEIDCPLAAGC!M!S!SDJNKBJGLHHOOFOAENACKGIKGBKMHOKOEOJBIKCBEOKJJAPGE</id>  </tStyleSheet>
  </CreateStyleSheetItem>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<CreateStyleSheetItemResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<h xmlns="****">
  <key>2</key>  <tag>TAB</tag>  <name>Стиль1</name>  <id>I2</id>  </h>
[![](../../minus.gif)](../../#)<style B="****" UNS="**0**">
  <Text HA="**0**" VA="**0**" WW="**0**" Mmm="**0.65 0.65 0.65 0.65**" />
  <NumberFormat F="****" FT="**0**" />
  <Font F="**Arial**" S="**8**" C="**#000000**" A="**0**" TR="**0**" I="**false**" B="**false**" U="**false**" SO="**false**" H="**12**" />
[![](../../minus.gif)](../../#)<Borders>
  <Border I="**0**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**1**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**2**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**3**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**4**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**5**" S="**7**" C="**#000000**" W="**2**" />
  <Border I="**6**" S="**7**" />
  <Border I="**7**" S="**7**" />
  </Borders>
  <PictureData E="**false**" />
  <Hyperlink T="****" A="****" />
  <ContainerInfo key="**2**" sheetType="**0**" />
  <Other DEA="****" DZA="****" P="**1**" L="**0**" FH="**0**" H="****" />
  </style>
  </CreateStyleSheetItemResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CreateStyleSheetItem" :
  {
   "tStyleSheet" :
    {
     "id" : "CPDKLBGLHHOOFOAEEOBMIPONHEFJBEBEOLJEMAEIDCPLAAGC!M!S!SDJNKBJGLHHOOFOAENACKGIKGBKMHOKOEOJBIKCBEOKJJAPGE"
    }
  }
}

### JSON-ответ:


{
 "CreateStyleSheetItemResult" :
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
     "@B" : "",
     "@UNS" : "0",
     "Text" :
      {
       "@VA" : "0",
       "@Mmm" : "0.65 0.65 0.65 0.65",
       "@HA" : "0",
       "@WW" : "0"
      },
     "NumberFormat" :
      {
       "@F" : "",
       "@FT" : "0"
      },
     "Font" :
      {
       "@A" : "0",
       "@B" : "false",
       "@SO" : "false",
       "@S" : "8",
       "@C" : "#000000",
       "@U" : "false",
       "@F" : "Arial",
       "@TR" : "0",
       "@H" : "12",
       "@I" : "false"
      },
     "Borders" :
      {
       "Border" :
        [
          {
           "@S" : "7",
           "@C" : "#000000",
           "@W" : "2",
           "@I" : "0"
          },
          {
           "@S" : "7",
           "@C" : "#000000",
           "@W" : "2",
           "@I" : "1"
          },
          {
           "@S" : "7",
           "@C" : "#000000",
           "@W" : "2",
           "@I" : "2"
          },
          {
           "@S" : "7",
           "@C" : "#000000",
           "@W" : "2",
           "@I" : "3"
          },
          {
           "@S" : "7",
           "@C" : "#000000",
           "@W" : "2",
           "@I" : "4"
          },
          {
           "@S" : "7",
           "@C" : "#000000",
           "@W" : "2",
           "@I" : "5"
          },
          {
           "@S" : "7",
           "@I" : "6"
          },
          {
           "@S" : "7",
           "@I" : "7"
          }
        ]
      },
     "PictureData" :
      {
       "@E" : "false"
      },
     "Hyperlink" :
      {
       "@A" : "",
       "@T" : ""
      },
     "ContainerInfo" :
      {
       "@key" : "2",
       "@sheetType" : "0"
      },
     "Other" :
      {
       "@P" : "1",
       "@H" : "",
       "@DEA" : "",
       "@L" : "0",
       "@FH" : "0",
       "@DZA" : ""
      }
    }
  }
}


public static StyleSheetItemMetadata CreateStyleSheetItem(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tCreate = new CreateStyleSheetItem()
    {
        tStyleSheet = new StyleSheetId() { id = moniker }
    };
    // Создание стиля в таблице стилей
    var result = somClient.CreateStyleSheetItem(tCreate);
    return result;
}


См. также:


[Работа
 с таблицей стилей](StyleSheet_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
