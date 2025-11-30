# CloseCubeImport: Операция

CloseCubeImport: Операция
-


**


# CloseCubeImport


## Синтаксис


bool CloseCubeImport(CubeImportId tCubeImport)


## Параметры


tCubeImport. Моникёр объекта
 импорта данных в куб.


## Описание


Операция CloseCubeImport закрывает
 экземпляр объекта импорта данных в куб и возвращает признак удачного закрытия.


## Комментарии


Для выполнения операции необходимо в параметре tCubeImport
 указать моникёр экземпляра объекта импорта, который необходимо закрыть.
 Результатом операции будет логическое значение true,
 если закрытие завершилось успешно.


## Пример


	 SOAP  JSON
	  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CloseCubeImport xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tCubeImport xmlns="****">
  <id>APJPBGEDEHLPFOAEJOPLMILHOOECMEPEOJKDMJHCGFMKDNKM!M!S!IDGLAIGEDEHLPFOAEPEOHNINBKMJBOEEEAINBLLIJNBNHEPDJ</id>  </tCubeImport>
  </CloseCubeImport>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <CloseCubeImportResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</CloseCubeImportResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CloseCubeImport" :
  {
   "tCubeImport" :
    {
     "id" : "APJPBGEDEHLPFOAEJOPLMILHOOECMEPEOJKDMJHCGFMKDNKM!M!S!IDGLAIGEDEHLPFOAEPEOHNINBKMJBOEEEAINBLLIJNBNHEPDJ"
    }
  }
}

### JSON-ответ:


{
 "CloseCubeImportResult" : "1"
}


public static bool CloseCubeImport(CubeImportId id)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tClose = new CloseCubeImport()
    {
        tCubeImport = id
    };
    //Закрытие объекта импорта данных в куб
    var result = somClient.CloseCubeImport(tClose);
    return result;
}


См. также:


[Работа с
 кубами](Cube_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
