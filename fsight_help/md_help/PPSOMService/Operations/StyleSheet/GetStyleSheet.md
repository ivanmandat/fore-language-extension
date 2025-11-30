# GetStyleSheet: Операция

GetStyleSheet: Операция
-


**


# GetStyleSheet


## Синтаксис


GetStyleSheetResult GetStyleSheet(StyleSheetId tStyleSheet,
 GetStyleSheetArg tArg)


## Параметры


tStyleSheet. Моникёр
 таблицы стилей.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetStyleSheet извлекает
 метаданные стилей таблицы стилей.


## Комментарии


Для выполнения операции необходимо в поле tStyleSheet
 указать моникёр таблицы стилей, а в поле tArg.pattern
 указать шаблон, в соответствии с которым будет извлекаться информация
 о стилях. Моникёр может быть получен при выполнении операции [OpenStyleSheet](OpenStyleSheet.htm)
 или сформирован на базе моникёра отчёта, если стили настроены и хранятся
 вместе с отчётом.


Результатом выполнения операции будет информация о стилях.


## Пример


Ниже приведён пример получения информации о доступных стилях в таблице
 стилей. В запросе передаётся моникёр открытого экземпляра таблицы стилей.
 В ответе возвращается информация о созданных стилях.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetStyleSheet xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tStyleSheet xmlns="****">
  <id>CPDKLBGLHHOOFOAEEOBMIPONHEFJBEBEOLJEMAEIDCPLAAGC!M!S!SDJNKBJGLHHOOFOAENACKGIKGBKMHOKOEOJBIKCBEOKJJAPGE</id>  </tStyleSheet>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <preview>true</preview>  </pattern>
  </tArg>
  </GetStyleSheet>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetStyleSheetResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>CPDKLBGLHHOOFOAEEOBMIPONHEFJBEBEOLJEMAEIDCPLAAGC!M!S!SDJNKBJGLHHOOFOAENACKGIKGBKMHOKOEOJBIKCBEOKJJAPGE</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
  <name>Таблица стилей</name>  <type>0</type>[![](../../minus.gif)](../../#)<items>
[![](../../minus.gif)](../../#)<it>
  <key>1</key>  <tag>TAB</tag>  <preview>iVBORw0KGgoAAAANSUhEUgAAAHgAAAAVCAYAAACNDipWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHaSURBVGhD7ZXdcQMhDISvH1eQBtxFXITf8+oe3EfKSE8XwFrNInR/43NyIcrMNxmDkBYtcEP6G4OuGcb7V9AjYXDnhMGds8rg67sGPngbxpsTFxwP8cyfzFySmXn+SmNnMZrHgmMya/Dt4xFw+fTng+Mza7B3exkcgIb0pGPufH/E4pk/pfGyPh2aE68B8vzb9VvBK8Og9pRuzDefpEwa4/xToGfeGptX95b+83hmr0sl+fzJ0qQ131sRqOYlKoPIzMZgagLX28NgrWX0Nbl53upydE4BA8uFkJyogZowrro8Rt+e5LwJf3Ivg/lUa8wrDZbcroHp96sMrpCcVr+9xb9q8NITrTgCtYmyIfzfarBlleG2uUbfrMHp9zNPdMY7nLof2d8hbjBELX4PHIGVQbk5NmalwdyktQeu0W1qN7mtNvldtD15g5HTaj+EwRmvqcUIHnMEssGl0TZGGsdr9jK4xEmeMmZqLx2Aan8bDGb9yIl10M690BqmfsGpa/fv9cgidfxJ0DxZ3LyMI1ANhkCKacyXNZ7BlrnNZNCERXgPjjbdywaDNRZwDTOHT5Z7+Dn+Jwz+S+QmVI0C0kQ+UP+BMLhzujM4qAmDOycM7pwwuHPU4KBXhvEbt9SBEBJ0pVAAAAAASUVORK5CYII=</preview>  <name>Стиль для заголовков</name>  <id>I1</id>  </it>
  </items>
  </meta>
  </GetStyleSheetResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetStyleSheet" :
  {
   "tStyleSheet" :
    {
     "id" : "CPDKLBGLHHOOFOAEEOBMIPONHEFJBEBEOLJEMAEIDCPLAAGC!M!S!SDJNKBJGLHHOOFOAENACKGIKGBKMHOKOEOJBIKCBEOKJJAPGE"
    },
   "tArg" :
    {
     "pattern" :
      {
       "preview" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "GetStyleSheetResult" :
  {
   "id" :
    {
     "id" : "CPDKLBGLHHOOFOAEEOBMIPONHEFJBEBEOLJEMAEIDCPLAAGC!M!S!SDJNKBJGLHHOOFOAENACKGIKGBKMHOKOEOJBIKCBEOKJJAPGE"
    },
   "meta" :
    {
     "name" : "Таблица стилей",
     "type" : "0",
     "items" :
      {
       "it" :
        {
         "key" : "1",
         "tag" : "TAB",
         "preview" : "iVBORw0KGgoAAAANSUhEUgAAAHgAAAAVCAYAAACNDipWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHaSURBVGhD7ZXdcQMhDISvH1eQBtxFXITf8+oe3EfKSE8XwFrNInR\/43NyIcrMNxmDkBYtcEP6G4OuGcb7V9AjYXDnhMGds8rg67sGPngbxpsTFxwP8cyfzFySmXn+SmNnMZrHgmMya\/Dt4xFw+fTng+Mza7B3exkcgIb0pGPufH\/E4pk\/pfGyPh2aE68B8vzb9VvBK8Og9pRuzDefpEwa4\/xToGfeGptX95b+83hmr0sl+fzJ0qQ131sRqOYlKoPIzMZgagLX28NgrWX0Nbl53upydE4BA8uFkJyogZowrro8Rt+e5LwJf3Ivg\/lUa8wrDZbcroHp96sMrpCcVr+9xb9q8NITrTgCtYmyIfzfarBlleG2uUbfrMHp9zNPdMY7nLof2d8hbjBELX4PHIGVQbk5NmalwdyktQeu0W1qN7mtNvldtD15g5HTaj+EwRmvqcUIHnMEssGl0TZGGsdr9jK4xEmeMmZqLx2Aan8bDGb9yIl10M690BqmfsGpa\/fv9cgidfxJ0DxZ3LyMI1ANhkCKacyXNZ7BlrnNZNCERXgPjjbdywaDNRZwDTOHT5Z7+Dn+Jwz+S+QmVI0C0kQ+UP+BMLhzujM4qAmDOycM7pwwuHPU4KBXhvEbt9SBEBJ0pVAAAAAASUVORK5CYII=",
         "name" : "Стиль для заголовков",
         "id" : "I1"
        }
      }
    }
  }
}


public static GetStyleSheetResult GetStyleSheetInfo(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetStyleSheet()
    {
        tArg = new GetStyleSheetArg()
        {
            pattern = new StyleSheetMdPattern()
            {
                preview = true
            }
        },
        tStyleSheet = new StyleSheetId { id = moniker }
    };
    // Получение информации о таблице стилей
    var result = somClient.GetStyleSheet(tGet);
    return result;
}


См. также:


[Работа
 с таблицей стилей](StyleSheet_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
