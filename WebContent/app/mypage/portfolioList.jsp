<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>내 포트폴리오</title>
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/assets/css/reset.css" />
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/assets/css/portfolioList.css" />
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/assets/css/reset.css">
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/assets/css/myPageMain.css">
</head>
<div class="header"></div>
<body>

	<div class="main-container">

		<ul class="portfolio-tab-panel">
			<li class="portfolio-tab-li">
				<div class="portfolio-tab-button-selected">
					전체 <span class="list-total">(${total})</span>
				</div>
			</li>
		</ul>
		<div class="portfolio-list">
			<div class="portfolio-list-number">NO</div>
			<div class="portfolio-list-info">제목</div>
			<!-- <div class="portfolio-list-like">좋아요</div> -->
			<div class="portfolio-list-reply">댓글</div>
			<div class="portfolio-list-view">조회수</div>
		</div>

		<c:choose>
			<c:when test="${not empty boardList}">
				<c:set var="i" value="0" />
				<c:forEach var="myPortfolio" items="${boardList}">
					<c:set var="i" value="${i + 1}" />
					<c:set var="i" value="${i + 1}" scope="session" />
					<div class="portfolio-conatiner">
						<div class="portfolio-number-container">
							<span> <c:out value="${i}" />
							</span>
						</div>
						<div class="portfolio-info-container">
							<a
								href="${pageContext.request.contextPath}/board/boardReadOk.bo?boardNumber=${myPortfolio.getBoardNumber()}">
								<!--       해당 보드로 이동처리                                   -->
								${myPortfolio.getBoardTitle() }
							</a>
						</div>
						<div class="portfolio-reply">${myPortfolio.getCommentCount()}</div>
						<div class="view-number">${myPortfolio.getBoardReadCount()}</div>
					</div>
				</c:forEach>
			</c:when>
		</c:choose>
	</div>

	<section id="paging">
		<c:if test="${prev}">
			<span><a class="prev">&lt;</a></span>
		</c:if>

		<c:forEach var="i" begin="${startPage}" end="${endPage}">
			<c:choose>
				<c:when test="${!(i == page) }">
					<a class="pageBtn"><c:out value="${i}" /></a>
				</c:when>
				<c:otherwise>
					<a class="active"><c:out value="${i}" /></a>
				</c:otherwise>
			</c:choose>
		</c:forEach>
		<c:if test="${next}">
			<span><a class="next">&gt;</a></span>
		</c:if>
	</section>



	<div class="footer"></div>
	<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	<script
		src="${pageContext.request.contextPath}/assets/js/portfolioList.js"></script>
</body>
</html>
