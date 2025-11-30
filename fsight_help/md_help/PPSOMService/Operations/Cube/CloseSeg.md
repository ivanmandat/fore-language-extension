# CloseSeg: Операция

CloseSeg: Операция
-


**


# CloseSeg


## Синтаксис


bool CloseSeg(SegId tSeg)


## Параметры


tSeg. Моникёр
 экземпляра сегмента куба.


## Описание


Операция CloseSeg закрывает
 экземпляр сегмента куба.


## Комментарии


Для выполнения операции укажите в поле tSeg
 моникёр экземпляра сегмента. Моникёр может быть получен при выполнении
 операции [OpenSeg](OpenSeg.htm).


Результатом операции будет логическое значение true,
 если закрытие завершилось успешно.


## Пример


Ниже приведён пример закрытия экземпляра сегмента куба. В запросе передаётся
 моникёр открытого экземпляра сегмента. В ответе приходит признак удачного
 закрытия.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CloseSeg xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tSeg xmlns="****">
  <id>FLEDMHBOCLDPFOAEDMFBLHBLOEJDMKEEKKHHKBBDHHIFPONM!M!S!CNOKHLMBOCLDPFOAECLPBNGOGGLICIMAEJIEMIFKOCDIBJKCM</id>  </tSeg>
  </CloseSeg>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <CloseSegResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</CloseSegResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CloseSeg" :
  {
   "tSeg" :
    {
     "id" : "FLEDMHBOCLDPFOAEDMFBLHBLOEJDMKEEKKHHKBBDHHIFPONM!M!S!CNOKHLMBOCLDPFOAECLPBNGOGGLICIMAEJIEMIFKOCDIBJKCM"
    }
  }
}

### JSON-ответ:


{
 "CloseSegResult" : "1"
}


public static bool CloseSeg(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tClose = new CloseSeg()
    {
        tSeg = new SegId() { id = moniker }
    };
    // Закрытие сегмента куба
    var b = somClient.CloseSeg(tClose);
    return b;
}


См. также:


[Работа с
 кубами](Cube_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
