# CopyStyleSheet: Операция

CopyStyleSheet: Операция
-


**


# CopyStyleSheet


## Синтаксис


CopyStyleSheetResult CopyStyleSheet(StyleSheetId
 tStyleSheetFrom, StyleSheetId tStyleSheetTo, CopyStyleSheetArg tArg)


## Параметры


tStyleSheetFrom. Моникёр
 таблицы стилей, из которой осуществляется копирование.


tStyleSheetTo. Моникёр таблицы
 стилей, в которую осуществляется копирование.


tArg. Параметры копирования
 стилей.


## Описание


Операция CopyStyleSheet копирует
 стили из одной таблицы стилей в другую таблицу стилей.


## Комментарии


Для выполнения операции укажите в поле tStyleSheetFrom
 моникёр таблицы стилей, из которой осуществляется копирование, а в поле
 tStyleSheetTo моникёр таблицы
 стилей, в которую копируются стили. Каждый моникёр может быть получен
 при выполнении операции [OpenStyleSheet](OpenStyleSheet.htm)
 или сформирован на базе моникёра отчёта, если стили настроены и хранятся
 вместе с отчётом.


Таблицы стилей должны быть доступны на редактирование. Копируемые стили
 указываются в поле tArg.items.


Операция не возвращает какой-либо ответ.


## Пример


Ниже приведён пример копирования стилей из одной таблицы стилей в другую.
 В запросе передаются моникёры двух таблиц стилей. В ответе ни какой информации
 не поступает.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CopyStyleSheet xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tStyleSheetFrom xmlns="****">
  <id>CPDKLBGLHHOOFOAEEOBMIPONHEFJBEBEOLJEMAEIDCPLAAGC!M!S!SDJNKBJGLHHOOFOAENACKGIKGBKMHOKOEOJBIKCBEOKJJAPGE</id>  </tStyleSheetFrom>
[![](../../minus.gif)](../../#)<tStyleSheetTo xmlns="****">
  <id>CPDKLBGLHHOOFOAEEOBMIPONHEFJBEBEOLJEMAEIDCPLAAGC!M!S!SDKJOFMGLHHOOFOAEKEFKDLDOJNNFCNGEMJEPCPKHIICJNILC</id>  </tStyleSheetTo>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <resolution>Replace</resolution>  </tArg>
  </CopyStyleSheet>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <CopyStyleSheetResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" />
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CopyStyleSheet" :
  {
   "tStyleSheetFrom" :
    {
     "id" : "CPDKLBGLHHOOFOAEEOBMIPONHEFJBEBEOLJEMAEIDCPLAAGC!M!S!SDJNKBJGLHHOOFOAENACKGIKGBKMHOKOEOJBIKCBEOKJJAPGE"
    },
   "tStyleSheetTo" :
    {
     "id" : "CPDKLBGLHHOOFOAEEOBMIPONHEFJBEBEOLJEMAEIDCPLAAGC!M!S!SDKJOFMGLHHOOFOAEKEFKDLDOJNNFCNGEMJEPCPKHIICJNILC"
    },
   "tArg" :
    {
     "resolution" : "Replace"
    }
  }
}

### JSON-ответ:


{
 "CopyStyleSheetResult" : ""
}


public static void CopyStyleSheet(string monikerFrom, string monikerTo)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tCopy = new CopyStyleSheet()
    {
        tStyleSheetFrom = new StyleSheetId { id = monikerFrom },
        tStyleSheetTo = new StyleSheetId { id = monikerTo },
        tArg = new CopyStyleSheetArg()
        {
            resolution = StyleSheetConflictResolutionType.Replace
        }
    };
    // Копирование стилей
    somClient.CopyStyleSheet(tCopy);
}


См. также:


[Работа
 с таблицей стилей](StyleSheet_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
