# CloseDim: Операция

CloseDim: Операция
-


**


# CloseDim


## Синтаксис


bool CloseDim(DmId tDim)


## Параметры


tDim. Моникёр открытого экземпляра
 справочника.


## Описание


Операция CloseDim закрывает
 справочник.


## Комментарии


Для выполнения операции необходимо в параметре tDim
 указать моникёр экземпляра справочника, который необходимо закрыть. Результатом
 операции будет логическое значение True,
 если закрытие справочника завершилось успешно.


## Пример


Пример закрытия экземпляра справочника. В запросе передается моникёр
 справочника. В ответе приходит признак удачного закрытия.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CloseDim xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tDim xmlns="****">
  <id>S1!M!S!S1</id>  </tDim>
  </CloseDim>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <CloseDimResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</CloseDimResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CloseDim" :
  {
   "tDim" :
    {
     "id" : "S1!M!S!S1"
    }
  }
}

### JSON-ответ:


{
 "CloseDimResult" : "1"
}


public static bool CloseDimension(DmId dim)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tClose = new CloseDim()
    {
        tDim = dim
    };
    //Закрытие экземпляра справочника
    var b = somClient.CloseDim(tClose);
    return b;
}


См. также:


[Работа
 со справочниками](Dimension_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
