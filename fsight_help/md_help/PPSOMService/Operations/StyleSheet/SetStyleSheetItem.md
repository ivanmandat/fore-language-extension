# SetStyleSheetItem: Операция

SetStyleSheetItem: Операция
-


**


# SetStyleSheetItem


## Синтаксис


bool SetStyleSheetItem(string mon, StyleSheetItemMetadata
 meta)


## Параметры


mon. Моникёр
 отдельного стиля в таблице стилей.


meta. Метаданные стиля, которые
 необходимо установить.


## Описание


Операция SetStyleSheetItem изменяет
 стиль в таблице стилей.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра таблицы стилей с постфиксом «!<номер
 стиля>», а в поле meta
 метаданные стиля, которые необходимо применить. Моникёр может быть получен
 при выполнении операции [OpenStyleSheet](OpenStyleSheet.htm).


В результате операция всегда возвращает значение false.


## Пример


Ниже приведён пример изменения настроек стиля. В запросе передаётся
 моникёр стиля и устанавливаемые настройки. В ответе возвращается признак
 успешного изменения настроек.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetStyleSheetItem xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">CPDKLBGLHHOOFOAEEOBMIPONHEFJBEBEOLJEMAEIDCPLAAGC!M!S!SDJNKBJGLHHOOFOAENACKGIKGBKMHOKOEOJBIKCBEOKJJAPGE!2</mon>[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<h>
  <key>2</key>  <tag>TAB</tag>  <name>Стиль1</name>  <id>I2</id>  </h>
[![](../../minus.gif)](../../#)<style>
  <Font F="**Arial**" S="**12**" I="**true**" />
  </style>
  </meta>
  </SetStyleSheetItem>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetStyleSheetItemResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">0</SetStyleSheetItemResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetStyleSheetItem" :
  {
   "mon" : "CPDKLBGLHHOOFOAEEOBMIPONHEFJBEBEOLJEMAEIDCPLAAGC!M!S!SDJNKBJGLHHOOFOAENACKGIKGBKMHOKOEOJBIKCBEOKJJAPGE!2",
   "meta" :
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
       "Font" :
        {
         "@S" : "12",
         "@F" : "Arial",
         "@I" : "true"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "SetStyleSheetItemResult" : "0"
}


public static bool SetStyleSheetItem(string moniker, StyleSheetItem item)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetStyleSheetItem()
    {
        mon = moniker + '!' + item.key,
        meta = new StyleSheetItemMetadata()
        {
            h = item,
            style = new TabStyle()
            {
                Font = new TabFontStyle()
                {
                    F = "Arial",
                    S = 12,
                    SSpecified = true,
                    I = true,
                    ISpecified = true
                },

            }
        }
    };
    // Настройка стиля
    var result = somClient.SetStyleSheetItem(tSet);
    return result;
}


См. также:


[Работа
 с таблицей стилей](StyleSheet_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
